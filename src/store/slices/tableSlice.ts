import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VKWebAppTapticImpactOccurred } from 'API/bridge'
import { ICell, ITableOptions } from 'types/table'
import { randomSort } from 'utils/array'
import { getRandomColor } from 'utils/color'

import cloneDeep from 'lodash/cloneDeep'
import { defaultTableOptions } from './tableOptions'

type TypeTableCompletedStatus = 'done' | 'terminated' | 'closed' | null

interface INextSequenceCell extends Pick<ICell, 'id' | 'symbol' | 'color' | 'typeColor'> {}

interface IHistoryChangesDisplayedCells {
   cells: ICell[]
   ts: number
}

interface ITable {
   sequence: string[]
   displayedCells: ICell[]
   sequenceCells: ICell[]

   historyChangesDisplayedCells: IHistoryChangesDisplayedCells[]
   clickedCells: IClickedCell[]
   hintedCells: IHintedCell[]

   startedAt: number | null
   completedAt: number | null

   completedStatus: TypeTableCompletedStatus
}
interface IActiveTable extends ITable {
   idxOfNextCellInSequence: number
   nextSequenceCell: INextSequenceCell | null
}

/**
 * `mistake` - неверный клик - ошибка
 * `mark` - правильный клик
 * `repeated` - клик по `mark` ячейке
 */
type TypeClickedCellAction = 'ok' | 'mistake' | 'repeated'

interface IClickedCell {
   cell: ICell
   action: TypeClickedCellAction
   ts: number
}

interface IHintedCell {
   cell: ICell
   style: string
   ts: number
   // startedAt: number
   // endsAt: number
}

interface ITableState {
   active: IActiveTable
   options: ITableOptions
}

const initialState: ITableState = {
   active: {
      sequence: [],
      displayedCells: [],
      historyChangesDisplayedCells: [],
      sequenceCells: [],
      clickedCells: [],
      hintedCells: [],
      idxOfNextCellInSequence: 0,
      nextSequenceCell: { id: '1', symbol: { id: '1', value: '1' } },
      startedAt: null,
      completedAt: null,
      completedStatus: null,
   },
   options: cloneDeep(defaultTableOptions),
}

let size = 3

const tableSlice = createSlice({
   name: 'table',
   initialState,
   reducers: {
      restart: (state) => {
         const sequence = Array(size ** 2)
            .fill('')
            .map((_, idx) => String(idx + 1))

         const cells: ICell[] = sequence.map((v, idx) => {
            const cell: ICell = {
               id: `cell--id--${v}`,
               // typeColor: 'none',
               typeColor: 'custom',
               color: getRandomColor(),
               // typeColor: idx % 2 === 0 ? 'black' : 'red',
               // tappableMode: 'background',
               tappableMode: 'opacity',
               isTappableDisabled: false,
               // typeOutline: 'primary',
               typeOutline: 'secondary',
               symbol: {
                  id: `symbol--id--${v}`,
                  disabled: false,
                  value: v,
                  color: getRandomColor(),

                  // typeColor: 'primary',
                  typeColor: 'custom',
               },
            }
            return cell
         })

         state.active.sequenceCells = cloneDeep(cells)

         state.active.idxOfNextCellInSequence = 0
         state.active.nextSequenceCell = cloneDeep(state.active.sequenceCells[0])
         state.active.displayedCells = cells.sort(randomSort)

         state.active.historyChangesDisplayedCells = []
         state.active.historyChangesDisplayedCells.push({ cells: state.active.displayedCells, ts: Date.now() })

         state.active.clickedCells = []
         state.active.hintedCells = []

         state.active.sequence = sequence
         state.active.startedAt = Date.now()
         state.active.completedAt = null
         state.active.completedStatus = null

         state.options.size = size
         if (size < 7) {
            size++
         }
      },
      clickCell: (state, action: PayloadAction<string>) => {
         const cellId = action.payload

         const cell = state.active.displayedCells.find((c) => c.id === cellId)

         if (!cell) return

         const click: IClickedCell = {
            cell: cloneDeep(cell),
            ts: Date.now(),
            action: 'ok',
         }

         if (state.active.nextSequenceCell?.id === cellId) {
            VKWebAppTapticImpactOccurred()

            cell.isTappableDisabled = true
            cell.symbol.disabled = true

            state.active.idxOfNextCellInSequence++

            if (state.active.idxOfNextCellInSequence <= state.active.sequenceCells.length - 1) {
               const nextCell = state.active.sequenceCells[state.active.idxOfNextCellInSequence]
               if (nextCell) {
                  state.active.nextSequenceCell = cloneDeep(nextCell)
               }
            } else {
               state.active.nextSequenceCell = null
               state.active.completedAt = Date.now()
               state.active.completedStatus = 'done'

               console.log('time: ', (state.active.completedAt - state.active.startedAt!) / 1000)
            }

            console.log('progress: ', state.active.idxOfNextCellInSequence / state.active.sequenceCells.length)
         } else if (
            state.active.clickedCells.findIndex((click) => click.cell.id === cellId && click.action === 'ok') !== -1
         ) {
            click.action = 'repeated'
         } else {
            click.action = 'mistake'
         }
         // console.log(click.ts - (state.active.cellClicks.at(-1)?.ts as any as number))

         state.active.clickedCells.push(click)
      },
   },
   extraReducers: (builder) => {
      /*  builder.addCase(startTable.pending, (state, action) => {})  
 builder.addCase(startTable.fulfilled, (state, action) => {})    
 builder.addCase(startTable.rejected, (state, action) => {})  */
   },
})
export const { clickCell, restart } = tableSlice.actions
export const tableReducer = tableSlice.reducer
