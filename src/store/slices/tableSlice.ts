import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   IMainTableParams,
   TableMode,
   TableTypeSequence,
   TableType,
   TableVariant,
   ICustomTableParams,
   ICell,
} from 'types/table'

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
      tableTypeSequence: TableTypeSequence.DEFAULT,
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

const tableSlice = createSlice({
   name: 'activeTable',
   initialState,
   reducers: {
      clickCell: (state, action: PayloadAction<number>) => {
         const cell = state.activeTable.cells[action.payload]
         if (cell === undefined) return

         if (cell.sequenceValue === state.activeTable.nextValue) {
         }

         const click: ICellClick = {
            ts: Date.now(),
            cellIdx: action.payload,
            action: 'mark',
         }
      },
   },
   extraReducers: (builder) => {
      /*  builder.addCase(startTable.pending, (state, action) => {})  
 builder.addCase(startTable.fulfilled, (state, action) => {})    
 builder.addCase(startTable.rejected, (state, action) => {})  */
   },
})
export const {} = tableSlice.actions
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
