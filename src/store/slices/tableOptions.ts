import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { applyTableOptions, getTableOptions } from 'store/asyncThunks/tableOptions'
import { IListItem } from 'types/list'
import {
   IMainTableOptions,
   IAdditionalTableOptions,
   ITableOptions,
   ITableType,
   ITableVariant,
   ITableMode,
   IColoredTableOptions,
   ITableColorVariant,
   IRedBlackTableOptions,
   ITableRedBlackVariant,
} from 'types/table'

import cloneDeep from 'lodash/cloneDeep'
import { colorVariants, redBlackVariants, tableModes, tableTypes, tableVariants } from 'table/data'

export const getSizeWithX = (size: number) => `${size}x${size}`

export const _fillSizes = (max: number) => {
   const sizes: IListItem<number>[] = []
   for (let _size = 3; _size <= max; _size += 2) {
      sizes.push({ value: _size, label: getSizeWithX(_size) })
   }
   return sizes
}

export const defaultMainTableOptions: IMainTableOptions = {
   type: tableTypes[0],
   variant: tableVariants[0],
   mode: tableModes[0],
}
export const defaultAdditionalTableOptions: IAdditionalTableOptions = {
   size: 5,

   isHideSelectedChars: true,
   isShuffleCellsAfterPress: true,
   isFlipVertically: false,
   isFlipHorizontally: false,
}
export const defaultColoredTableOptions: IColoredTableOptions = {
   colorVariant: colorVariants[0],
   isChangeColorsAfterPress: false,
   isAutoChangeColors: false,
}

export const defaultRedBlackTableOptions: IRedBlackTableOptions = {
   redBlackVariant: redBlackVariants[0],
}

export const defaultTableOptions: ITableOptions = Object.assign(defaultMainTableOptions, defaultAdditionalTableOptions)

interface IDataMainTableOptions {
   type: ITableType[]
   variant: ITableVariant[]
   mode: ITableMode[]
   colorVariants: ITableColorVariant[]
   redBlackVariants: ITableRedBlackVariant[]
}

interface ITableOptionsState {
   currentMainTableOptions: IMainTableOptions
   changeableMainTableOptions: IMainTableOptions

   currentAdditionalTableOptions: IAdditionalTableOptions
   changeableAdditionalTableOptions: IAdditionalTableOptions

   currentColoredTableOptions: IColoredTableOptions
   changeableColoredTableOptions: IColoredTableOptions

   currentRedBlackTableOptions: IRedBlackTableOptions
   changeableRedBlackTableOptions: IRedBlackTableOptions

   dataMainTableOptions: IDataMainTableOptions

   shownAdditionalOptions: boolean
   shownColoredOptions: boolean
   shownRedBlackOptions: boolean
   availableTableSizes: IListItem<number>[]
}

const initialState: ITableOptionsState = {
   currentMainTableOptions: cloneDeep(defaultMainTableOptions),
   changeableMainTableOptions: cloneDeep(defaultMainTableOptions),

   currentAdditionalTableOptions: cloneDeep(defaultAdditionalTableOptions),
   changeableAdditionalTableOptions: cloneDeep(defaultAdditionalTableOptions),

   currentColoredTableOptions: cloneDeep(defaultColoredTableOptions),
   changeableColoredTableOptions: cloneDeep(defaultColoredTableOptions),

   currentRedBlackTableOptions: cloneDeep(defaultRedBlackTableOptions),
   changeableRedBlackTableOptions: cloneDeep(defaultRedBlackTableOptions),

   dataMainTableOptions: {
      type: tableTypes,
      variant: tableVariants,
      mode: tableModes,
      colorVariants: colorVariants,
      redBlackVariants: redBlackVariants,
   },

   shownAdditionalOptions: false,
   shownColoredOptions: false,
   shownRedBlackOptions: false,
   availableTableSizes: _fillSizes(15),
}

const tableOptionsSlice = createSlice({
   name: 'tableOptions',
   initialState,
   reducers: {
      setMainTableOptionsType: (state, action: PayloadAction<string>) => {
         const type = state.dataMainTableOptions.type.find((type) => type.id === action.payload)
         if (!type) return

         state.changeableMainTableOptions.type = type
      },
      setMainTableOptionsVariant: (state, action: PayloadAction<string>) => {
         const variant = state.dataMainTableOptions.variant.find((variant) => variant.id === action.payload)
         if (!variant) return

         state.changeableMainTableOptions.variant = variant

         if (variant.showVariantOptions === 'colored') {
            state.shownColoredOptions = true
         } else {
            state.shownColoredOptions = false
         }

         if (variant.showVariantOptions === 'red-black') {
            state.shownRedBlackOptions = true
         } else {
            state.shownRedBlackOptions = false
         }
      },

      setMainTableOptionsMode: (state, action: PayloadAction<string>) => {
         const mode = state.dataMainTableOptions.mode.find((mode) => mode.id === action.payload)
         if (!mode) return
         state.changeableMainTableOptions.mode = mode

         if (mode.isShowOptions) {
            state.shownAdditionalOptions = true
         } else {
            state.shownAdditionalOptions = false
         }
      },

      //additional
      setAdditionalTableOptionsSize: (state, action: PayloadAction<number>) => {
         state.changeableAdditionalTableOptions.size = action.payload
      },
      setAdditionalTableOptionsIsHideSelected: (state, action: PayloadAction<boolean>) => {
         state.changeableAdditionalTableOptions.isHideSelectedChars = action.payload
      },
      setAdditionalTableOptionsIsShuffleCellsAfterPress: (state, action: PayloadAction<boolean>) => {
         state.changeableAdditionalTableOptions.isShuffleCellsAfterPress = action.payload
      },
      setAdditionalTableOptionsIsFlipHorizontally: (state, action: PayloadAction<boolean>) => {
         state.changeableAdditionalTableOptions.isFlipHorizontally = action.payload
      },
      setAdditionalTableOptionsIsFlipVertically: (state, action: PayloadAction<boolean>) => {
         state.changeableAdditionalTableOptions.isFlipVertically = action.payload
      },

      //colored
      setColoredTableOptionsColorVariant: (state, action: PayloadAction<string>) => {
         const color = state.dataMainTableOptions.colorVariants.find(
            (colorVariant) => colorVariant.id === action.payload
         )
         if (!color) return
         state.changeableColoredTableOptions.colorVariant = color
      },
      setColoredTableOptionsIsChangeColorsAfterPress: (state, action: PayloadAction<boolean>) => {
         state.changeableColoredTableOptions.isChangeColorsAfterPress = action.payload
      },
      setColoredTableOptionsIsAutoChangeColors: (state, action: PayloadAction<boolean>) => {
         state.changeableColoredTableOptions.isAutoChangeColors = action.payload
      },

      //redBlack
      setRedBlackTableOptionsVariant: (state, action: PayloadAction<string>) => {
         const redBlackVariant = state.dataMainTableOptions.redBlackVariants.find(
            (redBlackVariant) => redBlackVariant.id === action.payload
         )
         if (!redBlackVariant) return
         state.changeableRedBlackTableOptions.redBlackVariant = redBlackVariant
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getTableOptions.pending, (state, action) => {})
      builder.addCase(getTableOptions.fulfilled, (state, action) => {
         state.currentMainTableOptions = action.payload
         state.changeableMainTableOptions = action.payload
      })
      builder.addCase(getTableOptions.rejected, (state, action) => {})

      //===
      builder.addCase(applyTableOptions.pending, (state, action) => {})
      builder.addCase(applyTableOptions.fulfilled, (state, action) => {
         state.currentMainTableOptions = action.payload.main
         state.currentAdditionalTableOptions = action.payload.additional
         state.currentColoredTableOptions = action.payload.colored
         state.currentRedBlackTableOptions = action.payload.redBlack
      })
      builder.addCase(applyTableOptions.rejected, (state, action) => {})
   },
})

export const {
   setMainTableOptionsMode,
   setMainTableOptionsType,
   setMainTableOptionsVariant,

   setAdditionalTableOptionsSize,
   setAdditionalTableOptionsIsHideSelected,
   setAdditionalTableOptionsIsShuffleCellsAfterPress,
   setAdditionalTableOptionsIsFlipHorizontally,
   setAdditionalTableOptionsIsFlipVertically,

   setColoredTableOptionsColorVariant,
   setColoredTableOptionsIsAutoChangeColors,
   setColoredTableOptionsIsChangeColorsAfterPress,

   setRedBlackTableOptionsVariant,
} = tableOptionsSlice.actions

export const tableOptionsReducer = tableOptionsSlice.reducer
