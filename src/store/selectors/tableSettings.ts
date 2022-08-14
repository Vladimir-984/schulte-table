import { RootState } from 'store'

export const selectIsEnabledHints = (state: RootState) => state.tableSettings.isEnabledHints
export const selectHintsTimeout = (state: RootState) => state.tableSettings.hintsTimeout
export const selectHintsStyle = (state: RootState) => state.tableSettings.hintsStyle

export const selectColorCell = (state: RootState) => state.tableSettings.colorCell
export const selectColorSymbol = (state: RootState) => state.tableSettings.colorSymbol
export const selectIsMarkSelected = (state: RootState) => state.tableSettings.isMarkSelectedCells
export const selectIsShowMistakes = (state: RootState) => state.tableSettings.isShowMistakes
