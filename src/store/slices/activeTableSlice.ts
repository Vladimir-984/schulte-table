import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VKWebAppTapticImpactOccurred } from 'API/bridge'
import {
   IActiveTableData,
   ICell,
   IClickedCell,
   IHistoryChangesDisplayedCells,
   ITableOptions,
   TypeClickedCellAction,
   TypeVisibilityCell,
} from 'types/table'
import { randomSort } from 'utils/array'
import { getRandomColor } from 'utils/color'

import cloneDeep from 'lodash/cloneDeep'
import { defaultTableOptions } from './tableOptions'
import { shuffleArray } from 'table/generator'
import { getRandomNumber } from 'utils/number'
import { startTable } from 'store/asyncThunks/activeTable'

export interface IActiveTableState {
   data: IActiveTableData
   options: ITableOptions
}

const sequence = Array(5 ** 2)
   .fill('')
   .map((_, idx) => String(idx + 1))

const cells: ICell[] = sequence.map((v, idx) => {
   const cell: ICell = {
      id: `cell--id--${idx}`,
      background: {
         // backgroundColorMode: '',
         // backgroundColor: getRandomColor(),
         backgroundColorMode: 'red',
      },
      visibility: 'visible',

      tappable: {
         tappableMode: 'opacity',
         isTappableDisabled: false,
      },
      symbol: {
         value: v,
         color: getRandomColor(),
         colorMode: 'custom',
      },
   }
   return cell
})

const sequenceCells = cloneDeep(cells)

const displayedCells = cells.sort(randomSort)

const historyChangesDisplayedCells: IHistoryChangesDisplayedCells[] = []
historyChangesDisplayedCells.push({ displayedCells, ts: Date.now() })

const defaultTable: IActiveTableData = {
   sequence,
   sequenceCells,
   displayedCells,
   historyChangesDisplayedCells,
   currentSequenceCell: cloneDeep(sequenceCells[0]),
   idxOfCurrentCellInSequence: 0,
   clickedCells: [],
   startedAt: Date.now(),
   completedAt: null,
   status: null,
}

const initialState: IActiveTableState = {
   data: defaultTable,
   options: cloneDeep(defaultTableOptions),
}
/* const initialState: IActiveTableState = {
   data: {
      sequence: [],
      displayedCells: [],
      historyChangesDisplayedCells: [],
      sequenceCells: [],
      clickedCells: [],
      idxOfCurrentCellInSequence: 0,
      currentSequenceCell: {
         id: '1',
         background: { backgroundColorMode: 'none' },
         symbol: { value: '1', colorMode: 'primary' },
      },
      startedAt: null,
      completedAt: null,
      status: null,
   },
   options: cloneDeep(defaultTableOptions),
} */

// const autoChangedColors = new Set()

const activeTableSlice = createSlice({
   name: 'activeTable',
   initialState,
   reducers: {
      startSolution: (state) => {
         state.data.startedAt = Date.now()
         state.data.status = 'started'
      },
      // pause: (state) => {},
      clickDisplayedCell: (state, action: PayloadAction<number>) => {
         // const cellId = action.payload

         // const cell = state.data.displayedCells.find((c) => c.id === cellId)
         const cell = state.data.displayedCells[action.payload]

         if (!cell) return

         const click: IClickedCell = {
            cell: cloneDeep(cell),
            ts: Date.now(),
            action: 'correct',
         }

         if (state.data.currentSequenceCell?.id === cell.id) {
            VKWebAppTapticImpactOccurred()

            state.data.idxOfCurrentCellInSequence++

            const style = state.options.styleSelected.value
            if (state.options.styleSelected.value !== 'default') {
               if (cell.visibility) {
                  let v: TypeVisibilityCell = 'visible'

                  if (style === 'opacity_symbol') {
                     v = 'translucent_symbol'
                  }
                  if (style === 'hide_symbol') {
                     v = 'hidden_symbol'
                  }
                  if (style === 'hide') {
                     v = 'hidden'
                  }

                  cell.visibility = v
               }
            }

            if (state.data.idxOfCurrentCellInSequence <= state.data.sequenceCells.length - 1) {
               if (state.options.isShuffleCellsAfterSelect) {
                  // state.data.displayedCells.sort(randomSort)
                  state.data.displayedCells = shuffleArray(state.data.displayedCells)
               }
               // if (state.options.isChangeColorsAfterSelect) {
               //    state.data.displayedCells = state.data.displayedCells.map((cell) => {
               //       if (cell.background?.backgroundColor) {
               //          cell.background.backgroundColor = getRandomColor()
               //       }

               //       return cell
               //    })
               // }

               const nextCurrentSequenceCell = state.data.sequenceCells[state.data.idxOfCurrentCellInSequence]

               if (nextCurrentSequenceCell) {
                  state.data.currentSequenceCell = cloneDeep(nextCurrentSequenceCell)

                  /* const nextCurrentDisplayedCell = state.data.displayedCells.find(
                     (cell) => cell.id === nextCurrentSequenceCell.id
                  ) */

                  /*   if (nextCurrentDisplayedCell) {
                     state.data.currentSequenceCell = cloneDeep(nextCurrentDisplayedCell)
                  } */
               }
            } else {
               state.data.currentSequenceCell = null
               state.data.completedAt = Date.now()
               state.data.status = 'done'

               // console.log('time: ', (state.data.completedAt - state.data.startedAt!) / 1000)
            }

            // console.log('progress: ', state.data.idxOfCurrentCellInSequence / state.data.sequenceCells.length)
         } else {
            click.action = 'wrong'
         }

         state.data.clickedCells.push(click)

         /*    const stats = state.data.clickedCells.map((click, idx, arr) => {
            const v = { time: 0, value: '', action: '' as TypeClickedCellAction }

            if (idx === 0) {
               v.time = click.ts - state.data.startedAt!
            } else {
               v.time = click.ts - arr[idx - 1].ts
            }
            v.value = click.cell.symbol.value
            v.action = click.action
            return v
         }) */

         // console.log(stats)
      },
      autoChangeColor: (state) => {
         const idx = getRandomNumber(0, state.data.displayedCells.length - 1)
         const cell = state.data.displayedCells[idx]

         if (!cell) return

         // if (cell?.background?.backgroundColorMode === 'custom' && !!cell?.background?.backgroundColor) {
         //    cell.background.backgroundColor = getRandomColor()
         // }

         // if (cell.symbol?.colorMode === 'custom' && !!cell.symbol?.color) {
         //    cell.symbol.color = getRandomColor()
         // }

         // if (cell.id === state.data.currentSequenceCell?.id) {
         //    if (state.data.currentSequenceCell.background?.backgroundColor) {
         //       state.data.currentSequenceCell.background.backgroundColor = cell?.background?.backgroundColor
         //    }
         //    if (state.data.currentSequenceCell.symbol?.color) {
         //       state.data.currentSequenceCell.symbol.color = cell.symbol?.color
         //    }
         // }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(startTable.pending, (state, action) => {})
      builder.addCase(startTable.fulfilled, (state, action) => {
         state.data = action.payload.data
         state.options = action.payload.options
      })
      builder.addCase(startTable.rejected, (state, action) => {})
   },
})
export const { startSolution, clickDisplayedCell, autoChangeColor } = activeTableSlice.actions
export const activeTableReducer = activeTableSlice.reducer
