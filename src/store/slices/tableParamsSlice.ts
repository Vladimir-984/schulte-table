import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { applyTableParams, getTableParams } from 'store/asyncThunks/tableParams'
import { IListItem } from 'types/list'
import { ICustomTableParams, IMainTableParams, TableMode, TableSequence, TableType, TableVariant } from 'types/table'

export const getSizeWithX = (size: number) => `${size}x${size}`

export const _fillSizes = (max: number) => {
   const sizes: IListItem<number>[] = []
   for (let _size = 3; _size <= max; _size += 2) {
      sizes.push({ value: _size, label: getSizeWithX(_size) })
   }
   return sizes
}

export const defaultTableParams: ITableParams = {
   tableType: TableType.NUMBERS,
   tableVariant: TableVariant.STANDARD,
   tableMode: TableMode.CLASSIC,

   tableSize: 5,
   tableSequence: TableSequence.DEFAULT,
   tableIsFlipHorizontally: false,
   tableIsFlipVertically: false,
   tableIsShuffleCells: false,
}

export interface ITableParams extends IMainTableParams, ICustomTableParams {}

interface ITableParamsState {
   currentParams: ITableParams
   changeableParams: ITableParams

   availableTableSizes: IListItem<number>[]
   shownOtherParams: boolean
}

const initialState: ITableParamsState = {
   currentParams: { ...defaultTableParams },
   changeableParams: { ...defaultTableParams },
   shownOtherParams: false,
   availableTableSizes: _fillSizes(17),
}

const tableParamsSlice = createSlice({
   name: 'tableParams',
   initialState,
   reducers: {
      setTableParamsType: (state, action: PayloadAction<TableType>) => {
         state.changeableParams.tableType = action.payload

         // if(state.changeableParams.tableVariant === TableVariant.PLATONOV) {
         //     state.changeableParams.tableVariant = TableVariant.STANDARD
         // }
      },
      setTableParamsVariant: (state, action: PayloadAction<TableVariant>) => {
         state.changeableParams.tableVariant = action.payload

         if (state.changeableParams.tableSequence !== TableSequence.DEFAULT) {
            state.changeableParams.tableSequence = TableSequence.DEFAULT
         }
      },

      setTableParamsMode: (state, action: PayloadAction<TableMode>) => {
         state.changeableParams.tableMode = action.payload

         if (action.payload === TableMode.CUSTOM) {
            state.shownOtherParams = true
         } else {
            state.shownOtherParams = false
         }
      },

      setTableParamsSize: (state, action: PayloadAction<number>) => {
         state.changeableParams.tableSize = action.payload
      },
      setTableParamsSequence: (state, action: PayloadAction<TableSequence>) => {
         // if(false){}

         state.changeableParams.tableSequence = action.payload
      },

      setTableParamsIsFlipHorizontally: (state, action: PayloadAction<boolean>) => {
         state.changeableParams.tableIsFlipHorizontally = action.payload
      },
      setTableParamsIsFlipVertically: (state, action: PayloadAction<boolean>) => {
         state.changeableParams.tableIsFlipVertically = action.payload
      },
      setTableParamsIsShuffleCells: (state, action: PayloadAction<boolean>) => {
         state.changeableParams.tableIsShuffleCells = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getTableParams.pending, (state, action) => {})
      builder.addCase(getTableParams.fulfilled, (state, action) => {
         state.currentParams = action.payload
         state.changeableParams = action.payload
      })
      builder.addCase(getTableParams.rejected, (state, action) => {})

      //===
      builder.addCase(applyTableParams.pending, (state, action) => {})
      builder.addCase(applyTableParams.fulfilled, (state, action) => {
         state.currentParams = action.payload
      })
      builder.addCase(applyTableParams.rejected, (state, action) => {})
   },
})

export const {
   setTableParamsIsFlipHorizontally,
   setTableParamsIsFlipVertically,
   setTableParamsIsShuffleCells,
   setTableParamsMode,
   setTableParamsSequence,
   setTableParamsSize,
   setTableParamsType,
   setTableParamsVariant,
} = tableParamsSlice.actions

export const tableParamsReducer = tableParamsSlice.reducer
