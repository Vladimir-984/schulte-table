import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
   applyTableOptions,
   getTableOptions,
   setDisplayTableOptionsCellsShape,
   setDisplayTableOptionsIsEnabledShadow,
   setDisplayTableOptionsIsShowTime,
   setHintsTableOptionsIsEnabled,
   setHintsTableOptionsStyle,
   setHintsTableOptionsTimeout,
} from 'store/asyncThunks/tableOptions'
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
   ITableCellShape,
   IDisplayTableOptions,
   IHintsTableOptions,
   ITableHintTimeout,
   ITableHintStyle,
} from 'types/table'

import cloneDeep from 'lodash/cloneDeep'
import {
   cellsShapes,
   colorVariants,
   hintsStyles,
   hintsTimeouts,
   redBlackVariants,
   tableModes,
   tableTypes,
   tableVariants,
} from 'table/data'

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

export const defaultDisplayTableOptions: IDisplayTableOptions = {
   cellsShape: cellsShapes[0],
   cellsIsEnabledShadow: true,
   isShowTime: true,
   isShowCorrect: true,
   isShowMistakes: true,
}
export const defaultHintsTableOptions: IHintsTableOptions = {
   isEnabledHints: false,
   styleHints: hintsStyles[0],
   timeoutHints: 10,
}

export const defaultTableOptions: ITableOptions = {
   mainOptions: defaultMainTableOptions,
   additionalOptions: defaultAdditionalTableOptions,
   coloredOptions: defaultColoredTableOptions,
   redBlackOptions: defaultRedBlackTableOptions,
   display: defaultDisplayTableOptions,
   hints: defaultHintsTableOptions,
}

interface IDataTableOptions {
   type: ITableType[]
   variant: ITableVariant[]
   mode: ITableMode[]
   colorVariants: ITableColorVariant[]
   redBlackVariants: ITableRedBlackVariant[]
   cellsShapes: ITableCellShape[]
   hintTimeouts: ITableHintTimeout[]
   hintStyles: ITableHintStyle[]
}

interface ITableOptionsState {
   currentTableOptions: ITableOptions
   changeableTableOptions: ITableOptions

   dataTableOptions: IDataTableOptions

   shownAdditionalOptions: boolean
   shownColoredOptions: boolean
   shownRedBlackOptions: boolean
   availableTableSizes: IListItem<number>[]
}

const initialState: ITableOptionsState = {
   currentTableOptions: cloneDeep(defaultTableOptions),
   changeableTableOptions: cloneDeep(defaultTableOptions),

   dataTableOptions: {
      type: tableTypes,
      variant: tableVariants,
      mode: tableModes,
      colorVariants: colorVariants,
      redBlackVariants: redBlackVariants,
      cellsShapes: cellsShapes,
      hintTimeouts: hintsTimeouts,
      hintStyles: hintsStyles,
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
      setMainTableOptionsType: (state, action: PayloadAction<ITableType>) => {
         state.changeableTableOptions.mainOptions.type = action.payload
      },
      setMainTableOptionsVariant: (state, action: PayloadAction<ITableVariant>) => {
         state.changeableTableOptions.mainOptions.variant = action.payload

         if (action.payload.showVariantOptions === 'colored') {
            state.shownColoredOptions = true
         } else {
            state.shownColoredOptions = false
         }

         if (action.payload.showVariantOptions === 'red-black') {
            state.shownRedBlackOptions = true
         } else {
            state.shownRedBlackOptions = false
         }
      },

      setMainTableOptionsMode: (state, action: PayloadAction<ITableMode>) => {
         state.changeableTableOptions.mainOptions.mode = action.payload

         if (action.payload.isShowOptions) {
            state.shownAdditionalOptions = true
         } else {
            state.shownAdditionalOptions = false
         }
      },

      //additional
      setAdditionalTableOptionsSize: (state, action: PayloadAction<number>) => {
         state.changeableTableOptions.additionalOptions.size = action.payload
      },
      setAdditionalTableOptionsIsHideSelected: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.additionalOptions.isHideSelectedChars = action.payload
      },
      setAdditionalTableOptionsIsShuffleCellsAfterPress: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.additionalOptions.isShuffleCellsAfterPress = action.payload
      },
      setAdditionalTableOptionsIsFlipHorizontally: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.additionalOptions.isFlipHorizontally = action.payload
      },
      setAdditionalTableOptionsIsFlipVertically: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.additionalOptions.isFlipVertically = action.payload
      },

      //colored
      setColoredTableOptionsColorVariant: (state, action: PayloadAction<ITableColorVariant>) => {
         state.changeableTableOptions.coloredOptions.colorVariant = action.payload
      },
      setColoredTableOptionsIsChangeColorsAfterPress: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.coloredOptions.isChangeColorsAfterPress = action.payload
      },
      setColoredTableOptionsIsAutoChangeColors: (state, action: PayloadAction<boolean>) => {
         state.changeableTableOptions.coloredOptions.isAutoChangeColors = action.payload
      },

      //redBlack
      setRedBlackTableOptionsVariant: (state, action: PayloadAction<ITableRedBlackVariant>) => {
         state.changeableTableOptions.redBlackOptions.redBlackVariant = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getTableOptions.pending, (state, action) => {})
      builder.addCase(getTableOptions.fulfilled, (state, action) => {
         state.currentTableOptions = action.payload
         state.changeableTableOptions = action.payload
      })
      builder.addCase(getTableOptions.rejected, (state, action) => {})

      //hints
      builder.addCase(setHintsTableOptionsIsEnabled.pending, (state, action) => {
         state.changeableTableOptions.hints.isEnabledHints = action.meta.arg
      })
      builder.addCase(setHintsTableOptionsIsEnabled.fulfilled, (state, action) => {
         state.currentTableOptions.hints.isEnabledHints = action.payload
      })
      builder.addCase(setHintsTableOptionsIsEnabled.rejected, (state, action) => {
         state.changeableTableOptions.hints.isEnabledHints = state.currentTableOptions.hints.isEnabledHints
      })

      builder.addCase(setHintsTableOptionsStyle.pending, (state, action) => {
         state.changeableTableOptions.hints.styleHints = action.meta.arg
      })
      builder.addCase(setHintsTableOptionsStyle.fulfilled, (state, action) => {
         state.currentTableOptions.hints.styleHints = action.payload
      })
      builder.addCase(setHintsTableOptionsStyle.rejected, (state, action) => {
         state.changeableTableOptions.hints.styleHints = state.currentTableOptions.hints.styleHints
      })

      builder.addCase(setHintsTableOptionsTimeout.pending, (state, action) => {
         state.changeableTableOptions.hints.timeoutHints = action.meta.arg
      })
      builder.addCase(setHintsTableOptionsTimeout.fulfilled, (state, action) => {
         state.currentTableOptions.hints.timeoutHints = action.payload
      })
      builder.addCase(setHintsTableOptionsTimeout.rejected, (state, action) => {
         state.changeableTableOptions.hints.timeoutHints = state.currentTableOptions.hints.timeoutHints
      })

      //
      //display

      builder.addCase(setDisplayTableOptionsIsShowTime.pending, (state, action) => {
         state.changeableTableOptions.display.isShowTime = action.meta.arg
      })
      builder.addCase(setDisplayTableOptionsIsShowTime.fulfilled, (state, action) => {
         state.currentTableOptions.display.isShowTime = action.payload
      })
      builder.addCase(setDisplayTableOptionsIsShowTime.rejected, (state, action) => {
         state.changeableTableOptions.display.isShowTime = state.currentTableOptions.display.isShowTime
      })

      builder.addCase(setDisplayTableOptionsCellsShape.pending, (state, action) => {
         state.changeableTableOptions.display.cellsShape = action.meta.arg
      })
      builder.addCase(setDisplayTableOptionsCellsShape.fulfilled, (state, action) => {
         state.currentTableOptions.display.cellsShape = action.payload
      })
      builder.addCase(setDisplayTableOptionsCellsShape.rejected, (state, action) => {
         state.changeableTableOptions.display.cellsShape = state.currentTableOptions.display.cellsShape
      })

      builder.addCase(setDisplayTableOptionsIsEnabledShadow.pending, (state, action) => {
         state.changeableTableOptions.display.cellsIsEnabledShadow = action.meta.arg
      })
      builder.addCase(setDisplayTableOptionsIsEnabledShadow.fulfilled, (state, action) => {
         state.currentTableOptions.display.cellsIsEnabledShadow = action.payload
      })
      builder.addCase(setDisplayTableOptionsIsEnabledShadow.rejected, (state, action) => {
         state.changeableTableOptions.display.cellsIsEnabledShadow =
            state.currentTableOptions.display.cellsIsEnabledShadow
      })
      //

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
