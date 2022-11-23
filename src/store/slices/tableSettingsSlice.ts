import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TableHintsStyle } from 'lists'

export interface ITableSettingsDisplayState {
   isShowTime: boolean

   isShowCorrect: boolean
   //Анимация, если не та ячейка
   isShowMistakes?: boolean
}
// isTerminateOnWrongPress?: boolean

export interface ITableSettingsHintsState {
   isEnabledHints: boolean
   hintsTimeout: number
   hintsStyle: TableHintsStyle
}

export interface ITableSettingsState extends ITableSettingsDisplayState, ITableSettingsHintsState {}

const initialState: ITableSettingsState = {
   isShowTime: true,

   isShowCorrect: true,
   isShowMistakes: true,

   isEnabledHints: false,
   hintsTimeout: 10,
   hintsStyle: TableHintsStyle.GLOW,
}

const tableSettingsSlice = createSlice({
   name: 'tableSettings',
   initialState,
   reducers: {
      setIsShowCorrect: (state, action: PayloadAction<boolean>) => {
         state.isShowCorrect = action.payload
      },
      setIsShowMistakes: (state, action: PayloadAction<boolean>) => {
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
      // setTerminateOnWrong: (state, action: PayloadAction<boolean>) => {
      //    state.isTerminateOnWrong = action.payload
      // },
   },
   /*   extraReducers: builder => {
      builder.addCase(getCellsSettings.pending, (state, action) => {});
      builder.addCase(getCellsSettings.fulfilled, (state, action) => {});
      builder.addCase(getCellsSettings.rejected, (state, action) => {});
    } */
})
export const { setEnabledHints, setHintsTimeout, setHintsStyle, setIsShowCorrect, setIsShowMistakes, setShowTime } =
   tableSettingsSlice.actions
export const tableSettingsReducer = tableSettingsSlice.reducer
