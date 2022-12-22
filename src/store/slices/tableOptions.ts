import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { applyTableOptions, getTableOptions } from 'store/asyncThunks/tableOptions'

import {
   ITableOptions,
   ITableVariant,
   ITableTransform,
   ITableStyleSelected,
   ITableSequence,
   ITableTransforms,
   IListItem,
   ITableSize,
} from 'types/table'

import cloneDeep from 'lodash/cloneDeep'

import {
   tableSequences,
   tableVariants,
   tableTransforms,
   tableStylesSelected,
   defaultTableDirectionSequence,
} from 'table/data'
import { MAX_TABLE_SIZE, MIN_TABLE_SIZE } from 'constants/constants'

export const getSizeWithX = (size: number) => `${size}x${size}`

export const _fillSizes = (max: number) => {
   const sizes: IListItem<number>[] = []
   for (let _size = MIN_TABLE_SIZE; _size <= max; _size++) {
      sizes.push({ id: `size--${_size}`, value: _size, title: getSizeWithX(_size) })
   }
   return sizes
}

export const defaultTableSize: ITableSize = {
   id: 'size--5',
   value: 5,
   title: getSizeWithX(5),
}

export const defaultTableTransforms: ITableTransforms = {
   isTurn: false,
   isFlipX: false,
   isFlipY: false,
   // isSpin: false,
}
export const defaultTableOptions: ITableOptions = {
   variant: tableVariants[0],
   size: { ...defaultTableSize },

   directionSequence: tableSequences[0],

   isColoredSymbols: true,
   isUpdateColorsAfterSelect: true,
   // isAutoChangeColors: false,

   transforms: { ...defaultTableTransforms },
   isChangeTransformAfterSelect: false,

   styleSelected: tableStylesSelected[0],

   isShowCurrentSymbol: true,
   isShowTimeTable: true,

   isShuffleCellsAfterSelect: true,

   isPressOnSymbols: true,

   // cellShape: tableCellsShapes[0],
}

interface IDataTableOptions {
   variants: ITableVariant[]
   // cellsShapes: ITableCellShape[]
   directionSequences: ITableSequence[]
   stylesSelected: ITableStyleSelected[]
   transforms: ITableTransform[]
}

interface ITableOptionsState {
   currentTableOptions: ITableOptions
   changeableTableOptions: ITableOptions

   dataTableOptions: IDataTableOptions

   availableTableSizes: IListItem<number>[]
   isDisabledChangeDirectionSequence: boolean
   isDisabledChangeShowCurrentSymbol: boolean
   isDisabledChangeUpdateColorsAfterSelect: boolean
}

const initialState: ITableOptionsState = {
   currentTableOptions: cloneDeep(defaultTableOptions),
   changeableTableOptions: cloneDeep(defaultTableOptions),

   dataTableOptions: {
      variants: tableVariants,
      // cellsShapes: tableCellsShapes,
      stylesSelected: tableStylesSelected,
      directionSequences: tableSequences,
      transforms: tableTransforms,
   },

   availableTableSizes: _fillSizes(MAX_TABLE_SIZE),
   isDisabledChangeDirectionSequence: false,
   isDisabledChangeShowCurrentSymbol: false,
   isDisabledChangeUpdateColorsAfterSelect: false,
}

const tableOptionsSlice = createSlice({
   name: 'tableOptions',
   initialState,
   reducers: {
      setTableOptionsSize: (state, action: PayloadAction<ITableSize>) => {
         state.changeableTableOptions.size = action.payload
      },
      setMainTableOptionsVariant: (state, action: PayloadAction<ITableVariant>) => {
         state.changeableTableOptions.variant = action.payload

         if (action.payload.value === 'gorbov') {
            state.isDisabledChangeDirectionSequence = true

            state.changeableTableOptions.directionSequence = { ...defaultTableDirectionSequence }
         } else {
            state.isDisabledChangeDirectionSequence = false
         }
      },
      setTableOptionsDirectionSequence: (state, action: PayloadAction<ITableSequence>) => {
         state.changeableTableOptions.directionSequence = action.payload

         if (action.payload.value === 'random') {
            state.isDisabledChangeShowCurrentSymbol = true
            state.changeableTableOptions.isShowCurrentSymbol = true
         } else {
            state.isDisabledChangeShowCurrentSymbol = false
         }
      },

      setTableOptionsIsShuffleCellsAfterSelect: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.isShuffleCellsAfterSelect = action.payload
      },

      setTableOptionsIsColoredSymbols: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.isColoredSymbols = action.payload

         if (action.payload) {
            state.isDisabledChangeUpdateColorsAfterSelect = false
         } else {
            state.changeableTableOptions.isUpdateColorsAfterSelect = false
            state.isDisabledChangeUpdateColorsAfterSelect = true
         }
      },
      setTableOptionsStyleSelected: (state, action: PayloadAction<ITableStyleSelected>) => {
         state.changeableTableOptions.styleSelected = action.payload
      },
      setTableOptionsIsUpdateColorsAfterSelect: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.isUpdateColorsAfterSelect = action.payload
      },
      setTableOptionsIsShowCurrentSymbol: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.isShowCurrentSymbol = action.payload
      },
      setTableOptionsIsShowTableTime: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.isShowTimeTable = action.payload
      },

      /* setTableTransformOption: (state, action: PayloadAction<{ name: string; checked: boolean }>) => {
         if (Object.keys(state.changeableTableOptions.transforms).some((v) => v === action.payload.name)) {
            state.changeableTableOptions.transforms[action.payload.name as TypeTableTransform] = action.payload.checked
         }
      }, */
   },
   extraReducers: (builder) => {
      builder.addCase(getTableOptions.pending, (state, action) => {})
      builder.addCase(getTableOptions.fulfilled, (state, action) => {
         state.currentTableOptions = action.payload
         state.changeableTableOptions = action.payload
      })
      builder.addCase(getTableOptions.rejected, (state, action) => {})

      //===
      builder.addCase(applyTableOptions.pending, (state, action) => {})
      builder.addCase(applyTableOptions.fulfilled, (state, action) => {
         state.currentTableOptions = action.payload
         state.changeableTableOptions = action.payload
      })
      builder.addCase(applyTableOptions.rejected, (state, action) => {})
   },
})

export const {
   setTableOptionsSize,
   setMainTableOptionsVariant,
   setTableOptionsDirectionSequence,

   setTableOptionsIsUpdateColorsAfterSelect,
   setTableOptionsIsShuffleCellsAfterSelect,
   setTableOptionsIsColoredSymbols,
   setTableOptionsIsShowCurrentSymbol,
   setTableOptionsIsShowTableTime,
   setTableOptionsStyleSelected,
   // setTableTransformOption,
} = tableOptionsSlice.actions

export const tableOptionsReducer = tableOptionsSlice.reducer
