import { RootState } from 'store'

export const selectChangeableTableType = (state: RootState) => state.tableOptions.changeableMainTableOptions.type
export const selectChangeableTableTypeTitle = (state: RootState) =>
   state.tableOptions.changeableMainTableOptions.type.title

export const selectChangeableTableVariant = (state: RootState) => state.tableOptions.changeableMainTableOptions.variant
export const selectChangeableTableVariantTitle = (state: RootState) =>
   state.tableOptions.changeableMainTableOptions.variant.title

export const selectChangeableTableMode = (state: RootState) => state.tableOptions.changeableMainTableOptions.mode
export const selectChangeableTableModeTitle = (state: RootState) =>
   state.tableOptions.changeableMainTableOptions.mode.title

export const selectChangeableTableSize = (state: RootState) => state.tableOptions.changeableAdditionalTableOptions.size
// export const selectChangeableTableSequence = (state: RootState) => state.tableOptions.changeableAdditionalTableOptions.tableSequence

export const selectChangeableTableIsColoredSymbols = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isColoredSymbols

export const selectChangeableTableIsColoredCells = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isColoredCells

export const selectChangeableTableIsShuffleCells = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isShuffleCellsAfterPress

export const selectChangeableTableIsFlipHorizontally = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isFlipHorizontally

export const selectChangeableTableIsFlipVertically = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isFlipVertically

export const selectChangeableTableIsChangeColorsAfterPress = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isChangeColorsAfterPress

export const selectChangeableTableIsAutochangeColorsCells = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isChangeColorsPartCells

export const selectAvailableTableSizes = (state: RootState) => state.tableOptions.availableTableSizes

export const selectIsShownAdditionalOptions = (state: RootState) => state.tableOptions.shownAdditionalOptions

export const selectDataTableType = (state: RootState) => state.tableOptions.dataMainTableOptions.type
export const selectDataTableVariant = (state: RootState) => state.tableOptions.dataMainTableOptions.variant
export const selectDataTableMode = (state: RootState) => state.tableOptions.dataMainTableOptions.mode
