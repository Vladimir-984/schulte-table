import { createSlice } from '@reduxjs/toolkit'
import { TableColor } from 'types/table'

const initialState = {
   colorCell: TableColor.DEFAULT,
   colorSymbol: TableColor.DEFAULT,
   markSelectedCells: true,
   showMistakes: true,
}
const cellsSettingsSlice = createSlice({
   name: 'cellsSettings',
   initialState,
   reducers: {
      setCellsColorCell: (state, action) => {
         state.colorCell = action.payload
      },
      setCellsColorSymbol: (state, action) => {
         state.colorSymbol = action.payload
      },
      setCellsMarkSelectedCells: (state, action) => {
         state.markSelectedCells = action.payload
      },
      setCellShowMistakes: (state, action) => {
         state.showMistakes = action.payload
      },
   },
   /*   extraReducers: builder => {
      builder.addCase(getCellsSettings.pending, (state, action) => {});
      builder.addCase(getCellsSettings.fulfilled, (state, action) => {});
      builder.addCase(getCellsSettings.rejected, (state, action) => {});
    } */
})
export const { setCellShowMistakes, setCellsColorCell, setCellsColorSymbol, setCellsMarkSelectedCells } =
   cellsSettingsSlice.actions
export const cellsSettingsReducer = cellsSettingsSlice.reducer
