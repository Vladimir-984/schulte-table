import { RootState } from 'store'

export const selectActiveTableDisplayedCells = (state: RootState) => state.activeTable.data.displayedCells
export const selectActiveTableCurrentSequenceCell = (state: RootState) => state.activeTable.data.currentSequenceCell

export const selectActiveTableStartedAt = (state: RootState) => state.activeTable.data.startedAt
export const selectActiveTableCompletedAt = (state: RootState) => state.activeTable.data.completedAt
export const selectActiveTableStatus = (state: RootState) => state.activeTable.data.status
export const _selectActiveTable = (state: RootState) => state.activeTable.data

export const selectActiveTableOptionsSize = (state: RootState) => state.activeTable.options.size
export const selectActiveTableOptionsSizeValue = (state: RootState) => state.activeTable.options.size.value
export const selectActiveTableIsShowTimeTable = (state: RootState) => state.activeTable.options.isShowTimeTable
