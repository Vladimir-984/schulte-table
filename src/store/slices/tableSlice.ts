import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VKWebAppTapticImpactOccurred } from 'API/bridge'
import { TableMode, TableType, TableVariant, ICell, ITableParams } from 'types/table'
import { randomSort } from 'utils/array'
import { getRandomColor } from 'utils/color'

type TypeTableCompletedStatus = 'done' | 'terminated' | 'closed' | null

interface INextCell extends Required<Pick<ICell, 'id' | 'symbol'>>, Pick<ICell, 'color' | 'typeColor'> {
   // sequenceItemIdx: number
}

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
   cell: ICell
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
   options: ITableParams
}

const initialState: ITableState = {
   active: {
      sequence: [],
      cells: [],
      cellClicks: [],
      cellHints: [],
      nextCell: { id: '1', symbol: { id: '1', value: '', sequenceItemIdx: 0 } },
      startedAt: null,
      completedAt: null,
      completedStatus: null,
   },
   options: {
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
                  sequenceItemIdx: idx,
                  // color: getRandomColor(),
                  typeColor: 'primary',
               },
            }
            return cell
         })

         const cell: ICell = { ...cells[0] }
         const symbol = { ...cell.symbol }
         const nextCell = { ...cell, symbol }

         state.active.nextCell = nextCell

         // cells[0].symbol.value = '22'
         // cell.symbol.isFlipVertically = true

         state.active.cells = cells.sort(randomSort)
         state.active.sequence = sequence
         state.active.startedAt = Date.now()

         state.options.tableSize = size
         if (size < 7) {
            size++
         }
      },
      clickCell: (state, action: PayloadAction<string>) => {
         const cellId = action.payload
         const cell = state.active.cells.find((c) => c.id === cellId)
         if (!cell) return

         const clickCell: ICell = { ...cell }
         const symbol = { ...cell.symbol }

         const click: ICellClick = {
            cell: { ...clickCell, symbol },
            ts: Date.now(),
            action: 'ok',
         }

         if (state.active.nextCell.id === cellId) {
            const nextSeqIdx = cell.symbol.sequenceItemIdx + 1
            const nextCell = state.active.cells.find((c) => c.symbol.sequenceItemIdx === nextSeqIdx)

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

            VKWebAppTapticImpactOccurred()
         } else if (state.active.cellClicks.findIndex((cl) => cl.cell.id === cellId) !== -1) {
            click.action = 'repeated'
         } else {
            click.action = 'mistake'
         }
         state.active.cellClicks.push(click)
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
