import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   IMainTableParams,
   TableMode,
   TableSequence,
   TableType,
   TableVariant,
   ICustomTableParams,
   ICell,
   ISymbol,
} from 'types/table'
import { randomSort } from 'utils/array'
import { getRandomColor } from 'utils/color'

type TypeTableCompletedStatus = 'done' | 'terminated' | 'closed' | null

interface IActiveTable extends IMainTableParams, ICustomTableParams {
   nextValue: string
   cells: ICell[]
   sequence: string[]
   cellClicks: ICellClick[]
   cellHints: IHintCell[]
   tsStart: number

   completedStatus: TypeTableCompletedStatus
}

/**
 * `mistake` - неверный клик - ошибка
 * `mark` - правильный клик
 * `repeated` - клик по `mark` ячейке
 */
type TypeCellClickAction = 'mark' | 'mistake' | 'repeated'

interface ICellClick {
   action: TypeCellClickAction
   cellIdx: number
   ts: number
}

interface IHintCell {
   style: string
   cellIdx: number
   ts: number
}

interface ITableState {
   activeTable: IActiveTable
}

const initialState: ITableState = {
   activeTable: {
      tableType: TableType.NUMBERS,
      tableVariant: TableVariant.STANDARD,
      tableMode: TableMode.CLASSIC,
      tableSize: 5,
      tableSequence: TableSequence.DEFAULT,
      tableIsFlipVertically: false,
      tableIsFlipHorizontally: false,
      tableIsShuffleCells: false,
      sequence: [],
      cells: [],
      cellClicks: [],
      cellHints: [],
      nextValue: '',
      tsStart: Date.now(),
      completedStatus: null,
   },
}
const sequence = Array(49)
   .fill('')
   .map((_, idx) => String(idx + 1))

const cells: ICell[] = sequence
   .map((v, idx) => ({
      disabledTappable: false,
      id: `${v}--idx` as any as number,
      sequenceValue: v,
      symbol: {
         id: `s--${v}-${idx}` as any as number,
         disabled: false,
         value: v,
         color: getRandomColor(),
      },
   }))
   .sort(randomSort)

initialState.activeTable.cells = cells
initialState.activeTable.sequence = sequence
initialState.activeTable.nextValue = sequence[0]
initialState.activeTable.tableSize = 7

// for (let idx = 1; idx <= 49; idx++) {
//    const symbol: ISymbol = {
//       id: idx,
//       disabled: idx % 3 === 0 ? true : false,
//       value: `${idx}`,
//    }
//    const cell: ICell = {
//       id: idx,
//       symbol,
//       sequenceValue: '',
//       color: Math.random().toString(16).slice(-6),
//       disabledTappable: false,
//    }

//    cells.push(cell)
// }

const tableSlice = createSlice({
   name: 'activeTable',
   initialState,
   reducers: {
      clickCell: (state, action: PayloadAction<string>) => {
         const cellIdx = state.activeTable.cells.findIndex((c) => c.sequenceValue === action.payload)
         if (cellIdx === -1) return
         const cell = state.activeTable.cells[cellIdx]

         const click: ICellClick = {
            ts: Date.now(),
            cellIdx,
            action: 'mark',
         }
         const value = state.activeTable.nextValue
         if (cell.sequenceValue === value) {
            cell.disabledTappable = true
            cell.symbol.disabled = true
            const currentSeqIdx = state.activeTable.sequence.findIndex((s) => s === value)

            state.activeTable.nextValue = state.activeTable.sequence[currentSeqIdx + 1]
            state.activeTable.cells.sort(randomSort)
         } else if (cell.disabledTappable) {
            click.action = 'repeated'
         } else {
            click.action = 'mistake'
         }
         state.activeTable.cellClicks.push(click)
      },
   },
   extraReducers: (builder) => {
      /*  builder.addCase(startTable.pending, (state, action) => {})  
 builder.addCase(startTable.fulfilled, (state, action) => {})    
 builder.addCase(startTable.rejected, (state, action) => {})  */
   },
})
export const { clickCell } = tableSlice.actions
export const tableReducer = tableSlice.reducer

/*
import { createSlice } from '@reduxjs/toolkit'
import { startTable } from 'store/asyncThunks/table'
import { ICell, TableMode, TableSequence, TableType, TableVariant } from 'types/table'
import { ICustomTableParams, IMainTableParams } from './tableParamsSlice'

interface IActiveTable extends IMainTableParams, ICustomTableParams {
   nextValue: string

   cells: ICell[]
   sequence: string[]

   cellClicks: ICellClick[]
   cellHints: IHintCell[]

   tsStart: number
}

/**
 * `mistake` - неверный клик - ошибка
 * `mark` - правильный клик
 * `repeated` - клик по `mark` ячейке
/
 type TypeCellClickAction = 'mark' | 'mistake' | 'repeated'

 interface ICellClick {
    action: TypeCellClickAction
    cellIdx: number
    ts: number
 }
 
 interface IHintCell {
    style: string
    cellIdx: number
    ts: number
 }
 
 interface ITableState {
    activeTable: IActiveTable
 }
 
 const initialState: ITableState = {
    activeTable: {
       tableType: TableType.NUMBERS,
       tableVariant: TableVariant.STANDARD,
       tableMode: TableMode.CLASSIC,
       tableSize: 5,
       tableTypeSequence: TableSequence.DEFAULT,
       isFlipVertically: false,
       isFlipHorizontally: false,
       isShuffleCells: false,
 
       sequence: [],
       cells: [],
       cellClicks: [],
       cellHints: [],
 
       nextValue: '',
 
       tsStart: Date.now(),
    },
 }
 
 const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder.addCase(startTable.pending, (state, action) => {})
       builder.addCase(startTable.fulfilled, (state, action) => {})
       builder.addCase(startTable.rejected, (state, action) => {})
    },
 })
 
 export const {} = tableSlice.actions
 
 export const tableReducer = tableSlice.reducer
*/
