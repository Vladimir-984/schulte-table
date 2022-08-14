import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TableHintsStyle } from 'lists'
import { TableColor } from 'types/table'

export interface ITableSettingsState {
   colorCell: TableColor
   colorSymbol: TableColor
   isMarkSelectedCells: boolean
   isShowMistakes: boolean

   isEnabledHints: boolean
   hintsTimeout: number
   hintsStyle: TableHintsStyle

   //
   isShowTime?: boolean
   isShowNextValue?: boolean
   isTerminateOnWrong?: boolean
}

const initialState: ITableSettingsState = {
   colorCell: TableColor.DEFAULT,
   colorSymbol: TableColor.DEFAULT,
   isMarkSelectedCells: true,
   isShowMistakes: true,

   isEnabledHints: false,
   hintsTimeout: 10,
   hintsStyle: TableHintsStyle.GLOW,
}

const tableSettingsSlice = createSlice({
   name: 'tableSettings',
   initialState,
   reducers: {
      setColorCell: (state, action: PayloadAction<TableColor>) => {
         state.colorCell = action.payload
      },
      setColorSymbol: (state, action: PayloadAction<TableColor>) => {
         state.colorSymbol = action.payload
      },
      setMarkSelectedCells: (state, action: PayloadAction<boolean>) => {
         state.isMarkSelectedCells = action.payload
      },
      setShowMistakes: (state, action: PayloadAction<boolean>) => {
         state.isShowMistakes = action.payload
      },

      setEnabledHints: (state, action: PayloadAction<boolean>) => {
         state.isEnabledHints = action.payload
      },
      setHintsTimeout: (state, action: PayloadAction<number>) => {
         state.hintsTimeout = action.payload
      },
      setHintsStyle: (state, action: PayloadAction<TableHintsStyle>) => {
         state.hintsStyle = action.payload
      },

      setShowTime: (state, action: PayloadAction<boolean>) => {
         state.isShowTime = action.payload
      },
      setShowNextValue: (state, action: PayloadAction<boolean>) => {
         state.isShowNextValue = action.payload
      },
      setTerminateOnWrong: (state, action: PayloadAction<boolean>) => {
         state.isTerminateOnWrong = action.payload
      },
   },
   /*   extraReducers: builder => {
      builder.addCase(getCellsSettings.pending, (state, action) => {});
      builder.addCase(getCellsSettings.fulfilled, (state, action) => {});
      builder.addCase(getCellsSettings.rejected, (state, action) => {});
    } */
})
export const {
   setEnabledHints,
   setHintsTimeout,
   setHintsStyle,
   setColorCell,
   setColorSymbol,
   setMarkSelectedCells,
   setShowMistakes,
} = tableSettingsSlice.actions
export const tableSettingsReducer = tableSettingsSlice.reducer
