import { RootState } from 'store'

export const selectHintsIsActive = (state: RootState) => state.tableSettings.hintsIsActive
export const selectHintsTimeout = (state: RootState) => state.tableSettings.hintsTimeout
export const selectHintsStyle = (state: RootState) => state.tableSettings.hintsStyle
