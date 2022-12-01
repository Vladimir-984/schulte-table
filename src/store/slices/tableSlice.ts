import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VKWebAppTapticImpactOccurred } from 'API/bridge'
import { ICell, ITableOptions } from 'types/table'
import { randomSort } from 'utils/array'
import { getRandomColor } from 'utils/color'

import cloneDeep from 'lodash/cloneDeep'
import { defaultTableOptions } from './tableOptions'
import { shuffleArray } from 'table/generator'
import { getRandomNumber } from 'utils/number'

type TypeTableCompletedStatus = 'done' | 'terminated' | 'closed' | null

interface ICurrentSequenceCell extends Pick<ICell, 'id' | 'char' | 'background'> {}

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
   idxOfCurrentCellInSequence: number
   currentSequenceCell: ICurrentSequenceCell | null
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
      idxOfCurrentCellInSequence: 0,
      currentSequenceCell: { id: '1', char: { value: '1' } },
      startedAt: null,
      completedAt: null,
      completedStatus: null,
   },
   options: cloneDeep(defaultTableOptions),
}

let size = 3

// const autoChangedColors = new Set()

const tableSlice = createSlice({
   name: 'table',
   initialState,
   reducers: {
      start: (state) => {
         state.active.startedAt = Date.now()
      },
      // pause: (state) => {},
      restart: (state) => {
         const sequence = Array(size ** 2)
            .fill('')
            .map((_, idx) => String(idx + 1))

         const cells: ICell[] = sequence.map((v, idx) => {
            const cell: ICell = {
               id: `cell--id--${v}`,
               shape: 'rounded-square',
               // shape: 'rounded-square',
               // outline: 'secondary',
               // borderRadius: 8,
               background: {
                  backgroundColorMode: 'custom',
                  backgroundColor: getRandomColor(),
                  // backgroundColorMode: 'none',
                  backgroundShadow: true,
               },
               // typeColor: idx % 2 === 0 ? 'black' : 'red',
               tappable: {
                  // tappableMode: 'background',
                  tappableMode: 'opacity',
                  isTappableDisabled: false,
               },
               char: {
                  value: v,
                  visibility: 'visible',
                  color: getRandomColor(),
                  // colorMode: 'custom',
                  colorMode: 'white',

                  // colorMode: idx % 2 === 0 ? 'black' : 'red',
                  // colorMode: 'primary',
               },
            }
            return cell
         })

         state.active.sequenceCells = cloneDeep(cells)

         state.active.idxOfCurrentCellInSequence = 0
         state.active.currentSequenceCell = cloneDeep(state.active.sequenceCells[0])
         state.active.displayedCells = cells.sort(randomSort)

         state.active.historyChangesDisplayedCells = []
         state.active.historyChangesDisplayedCells.push({ cells: state.active.displayedCells, ts: Date.now() })

         state.active.clickedCells = []
         state.active.hintedCells = []

         state.active.sequence = sequence
         state.active.startedAt = Date.now()
         state.active.completedAt = null
         state.active.completedStatus = null

         state.options.additionalOptions.size = size
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

         if (state.active.currentSequenceCell?.id === cellId) {
            VKWebAppTapticImpactOccurred()

            state.active.idxOfCurrentCellInSequence++

            if (state.options.additionalOptions.isHideSelectedChars) {
               if (cell.char.visibility) {
                  cell.char.visibility = 'hidden'
               }
            }

            if (state.active.idxOfCurrentCellInSequence <= state.active.sequenceCells.length - 1) {
               if (state.options.additionalOptions.isShuffleCellsAfterPress) {
                  state.active.displayedCells.sort(randomSort)

                  // state.active.displayedCells = shuffleArray(state.active.displayedCells)
               }

               const nextCurrentCell = state.active.sequenceCells[state.active.idxOfCurrentCellInSequence]
               if (nextCurrentCell) {
                  state.active.currentSequenceCell = cloneDeep(nextCurrentCell)
               }
            } else {
               state.active.currentSequenceCell = null
               state.active.completedAt = Date.now()
               state.active.completedStatus = 'done'

               console.log('time: ', (state.active.completedAt - state.active.startedAt!) / 1000)
            }

            console.log('progress: ', state.active.idxOfCurrentCellInSequence / state.active.sequenceCells.length)
         } else if (
            state.active.clickedCells.findIndex(
               (clickedCell) => clickedCell.cell.id === cellId && clickedCell.action === 'ok'
            ) !== -1
         ) {
            click.action = 'repeated'
         } else {
            click.action = 'mistake'
         }
         // console.log(click.ts - (state.active.cellClicks.at(-1)?.ts as any as number))

         state.active.clickedCells.push(click)
      },
      autoChangeColor: (state) => {
         const idx = getRandomNumber(0, state.active.displayedCells.length - 1)
         const cell = state.active.displayedCells[idx]

         if (cell?.background?.backgroundColorMode === 'custom' && !!cell?.background?.backgroundColor) {
            cell.background.backgroundColor = getRandomColor()
         }

         if (cell?.char?.colorMode === 'custom' && !!cell?.char?.color) {
            cell.char.color = getRandomColor()
         }
      },
   },
   extraReducers: (builder) => {
      /*  builder.addCase(startTable.pending, (state, action) => {})  
 builder.addCase(startTable.fulfilled, (state, action) => {})    
 builder.addCase(startTable.rejected, (state, action) => {})  */
   },
})
export const { clickCell, restart, autoChangeColor } = tableSlice.actions
export const tableReducer = tableSlice.reducer
