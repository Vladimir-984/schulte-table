import { RootState } from 'store'

export const selectChangeableTableType = (state: RootState) => state.tableParams.changeableParams.tableType
export const selectChangeableTableVariant = (state: RootState) => state.tableParams.changeableParams.tableVariant
export const selectChangeableTableMode = (state: RootState) => state.tableParams.changeableParams.tableMode
export const selectChangeableTableSize = (state: RootState) => state.tableParams.changeableParams.tableSize
export const selectChangeableTableTypeSequence = (state: RootState) =>
   state.tableParams.changeableParams.tableTypeSequence

export const selectChangeableTableIsShuffleCells = (state: RootState) =>
   state.tableParams.changeableParams.tableIsShuffleCells
export const selectChangeableTableIsFlipHorizontally = (state: RootState) =>
   state.tableParams.changeableParams.tableIsFlipHorizontally
export const selectChangeableTableIsFlipVertically = (state: RootState) =>
   state.tableParams.changeableParams.tableIsFlipVertically

export const selectAvailableTableSizes = (state: RootState) => state.tableParams.availableTableSizes