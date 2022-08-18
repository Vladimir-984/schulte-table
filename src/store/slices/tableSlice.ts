import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TableMode, TableType, TableVariant, ICell, ITableParams } from 'types/table'
import { randomSort } from 'utils/array'
import { getRandomColor } from 'utils/color'

type TypeTableCompletedStatus = 'done' | 'terminated' | 'closed' | null

interface INextCell extends Pick<ICell, 'id' | 'typeColor' | 'color' | 'symbol'> {}

interface IActiveTable {
   nextCell: INextCell
   cells: ICell[]
   sequence: string[]
   cellClicks: ICellClick[]
   cellHints: IHintCell[]
   startedAt: number | null
   completedAt: number | null

   completedStatus: TypeTableCompletedStatus
}

/**
 * `mistake` - неверный клик - ошибка
 * `mark` - правильный клик
 * `repeated` - клик по `mark` ячейке
 */
type TypeCellClickAction = 'ok' | 'mistake' | 'repeated'

interface ICellClick {
   cellId: string
   action: TypeCellClickAction
   ts: number
}

interface IHintCell {
   style: string
   cellIdx: number
   startedAt: number
   endsAt: number
}

interface ITableState {
   active: IActiveTable
   params: ITableParams
}

const initialState: ITableState = {
   active: {
      sequence: [],
      cells: [],
      cellClicks: [],
      cellHints: [],
      nextCell: { id: '1', symbol: { id: '1', value: '' } },
      startedAt: null,
      completedAt: null,
      completedStatus: null,
   },
   params: {
      tableType: TableType.NUMBERS,
      tableVariant: TableVariant.STANDARD,
      tableMode: TableMode.CLASSIC,
      tableSize: 5,
      tableIsFlipVertically: false,
      tableIsFlipHorizontally: false,
      tableIsShuffleCells: false,
   },
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
               typeColor: 'none',
               // typeColor: idx % 2 === 0 ? 'black' : 'red',
               tappableMode: 'background',
               // tappableMode: 'opacity',
               isTappableDisabled: false,
               typeOutline: 'primary',
               symbol: {
                  id: `symbol--id--${v}`,
                  disabled: false,
                  value: v,
                  // color: getRandomColor(),
                  typeColor: 'primary',
               },
            }
            return cell
         })

         state.active.nextCell = cells[0]

         state.active.cells = cells.sort(randomSort)
         state.active.sequence = sequence
         state.active.startedAt = Date.now()

         state.params.tableSize = size
         if (size < 7) {
            size++
         }
      },
      clickCell: (state, action: PayloadAction<string>) => {
         //payload == cell.id
         const cell = state.active.cells.find((c) => c.id === action.payload)
         if (!cell) return

         const click: ICellClick = {
            cellId: cell.id,
            ts: Date.now(),
            action: 'ok',
         }

         if (state.active.nextCell.id === cell.id) {
            const currentSeqIdx = state.active.sequence.findIndex((s) => s === state.active.nextCell.symbol.value)
            const nextSeqValue = state.active.sequence[currentSeqIdx + 1]

            const nextCell = state.active.cells.find((c) => c.symbol.value === nextSeqValue)
            cell.isTappableDisabled = true
            cell.symbol.disabled = true

            if (nextCell) {
               state.active.nextCell = {
                  id: nextCell.id,
                  color: nextCell.color,
                  typeColor: nextCell.typeColor,
                  symbol: nextCell.symbol,
               }
            }
         } else if (state.active.cellClicks.findIndex((cl) => cl.cellId === click.cellId) !== -1) {
            click.action = 'repeated'
         } else {
            click.action = 'mistake'
         }
         state.active.cellClicks.push(click)
         /*      const cellIdx = state.active.cells.findIndex((c) => c.sequenceValue === action.payload)
         if (cellIdx === -1) return
         const cell = state.active.cells[cellIdx]

         const value = state.active.nextValue.sequenceValue

         if (cell.sequenceValue === value) {
            cell.disabledTappable = true
            cell.symbol.disabled = true
            const currentSeqIdx = state.active.sequence.findIndex((s) => s === value)

            const nextSequenceValue = state.active.sequence[currentSeqIdx + 1]
            const next = state.active.cells.find((c) => c.sequenceValue === nextSequenceValue)
            if (next !== undefined) {
               state.active.nextValue = next
            }
            // state.activeTable.cells.sort(randomSort)
         } else if (cell.disabledTappable) {
            click.action = 'repeated'
         } else {
            click.action = 'mistake'
         }
         state.active.cellClicks.push(click) */
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
