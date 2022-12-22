import { createAsyncThunk } from '@reduxjs/toolkit'
import { getRandomString } from '@vkontakte/vkjs'
import { cloneDeep } from 'lodash'
import { RootState } from 'store'
import { IActiveTableState } from 'store/slices/activeTableSlice'
import { IActiveTableData, ICell, IHistoryChangesDisplayedCells } from 'types/table'
import { randomSort } from 'utils/array'
import { getRandomColor } from 'utils/color'
import { getRandomNumber } from 'utils/number'

const flips = ['x', 'y', 'both']

export const startTable = createAsyncThunk<IActiveTableState, undefined>('activeTable/start', async (_, thunkAPI) => {
   try {
      const tableOptions = (thunkAPI.getState() as RootState).tableOptions.currentTableOptions

      const sequence = Array(tableOptions.size.value ** 2)
         .fill('')
         .map((_, idx) => String(idx + 1))

      // const isT = !!getRandomNumber(0, 1)
      const cells: ICell[] = sequence.map((v, idx) => {
         const cell: ICell = {
            id: `cell--id--${idx}`,

            background: {
               backgroundColorMode: 'primary',
               // backgroundColorMode: 'none',
               // backgroundColor: getRandomColor(),
               // backgroundColorMode: getRandomColor(),
            },

            /*  transforms: {
               turn: ((idx % 3) + 1) * 90,
               flip: flips[idx % 3],
            }, */
            tappable: {
               // tappableMode: 'background',
               tappableMode: 'opacity',
               isTappableDisabled: false,
            },
            visibility: 'visible',
            symbol: {
               value: v,

               color: getRandomColor(),
               colorMode: 'custom',
               // colorMode: 'primary',
               // colorMode: idx % 2 === 0 ? 'black' : 'red',
               // colorMode: 'primary',
            },
         }
         return cell
      })

      const sequenceCells = cloneDeep(cells)

      const displayedCells = cells.sort(randomSort)

      const historyChangesDisplayedCells: IHistoryChangesDisplayedCells[] = []
      historyChangesDisplayedCells.push({ displayedCells, ts: Date.now() })

      const table: IActiveTableData = {
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
      const activeTable: IActiveTableState = {
         data: table,
         options: tableOptions,
      }
      return activeTable
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})
