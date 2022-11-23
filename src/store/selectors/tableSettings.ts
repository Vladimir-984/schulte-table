import { RootState } from 'store'

export const selectIsEnabledHints = (state: RootState) => state.tableSettings.isEnabledHints
export const selectHintsTimeout = (state: RootState) => state.tableSettings.hintsTimeout
export const selectHintsStyle = (state: RootState) => state.tableSettings.hintsStyle

export const selectIsShowCorrect = (state: RootState) => state.tableSettings.isShowCorrect
export const selectIsShowMistakes = (state: RootState) => state.tableSettings.isShowMistakes
