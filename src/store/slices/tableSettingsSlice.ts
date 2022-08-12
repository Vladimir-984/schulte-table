import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TableHintsStyle } from 'lists'
import { TableColor } from 'types/table'

export interface ITableSettingsState {
   colorCell: TableColor
   colorSymbol: TableColor
   markSelectedCells: boolean
   showMistakes: boolean

   hintsIsActive: boolean
   hintsTimeout: number
   hintsStyle: TableHintsStyle
}

const initialState: ITableSettingsState = {
   colorCell: TableColor.DEFAULT,
   colorSymbol: TableColor.DEFAULT,
   markSelectedCells: true,
   showMistakes: true,

   hintsIsActive: false,
   hintsTimeout: 10,
   hintsStyle: TableHintsStyle.GLOW,
}

const tableSettingsSlice = createSlice({
   name: 'tableSettings',
   initialState,
   reducers: {
      setColorCell: (state, action) => {
         state.colorCell = action.payload
      },
      setColorSymbol: (state, action) => {
         state.colorSymbol = action.payload
      },
      setMarkSelectedCells: (state, action) => {
         state.markSelectedCells = action.payload
      },
      setShowMistakes: (state, action) => {
         state.showMistakes = action.payload
      },

      setHintsIsActive: (state, action: PayloadAction<boolean>) => {
         state.hintsIsActive = action.payload
      },
      setHintsTimeout: (state, action: PayloadAction<number>) => {
         state.hintsTimeout = action.payload
      },
      setHintsStyle: (state, action: PayloadAction<TableHintsStyle>) => {
         state.hintsStyle = action.payload
      },
   },
   /*   extraReducers: builder => {
      builder.addCase(getCellsSettings.pending, (state, action) => {});
      builder.addCase(getCellsSettings.fulfilled, (state, action) => {});
      builder.addCase(getCellsSettings.rejected, (state, action) => {});
    } */
})
export const { setHintsIsActive, setHintsTimeout, setHintsStyle } = tableSettingsSlice.actions
export const tableSettingsReducer = tableSettingsSlice.reducer
