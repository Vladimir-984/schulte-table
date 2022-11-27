import { RootState } from 'store'

//main
export const selectChangeableTableType = (state: RootState) => state.tableOptions.changeableMainTableOptions.type
export const selectChangeableTableTypeTitle = (state: RootState) =>
   state.tableOptions.changeableMainTableOptions.type.title

export const selectChangeableTableVariant = (state: RootState) => state.tableOptions.changeableMainTableOptions.variant
export const selectChangeableTableVariantTitle = (state: RootState) =>
   state.tableOptions.changeableMainTableOptions.variant.title

export const selectChangeableTableMode = (state: RootState) => state.tableOptions.changeableMainTableOptions.mode
export const selectChangeableTableModeTitle = (state: RootState) =>
   state.tableOptions.changeableMainTableOptions.mode.title
//

//additional
export const selectChangeableTableSize = (state: RootState) => state.tableOptions.changeableAdditionalTableOptions.size
// export const selectChangeableTableSequence = (state: RootState) => state.tableOptions.changeableAdditionalTableOptions.tableSequence

export const selectChangeableTableIsHideSelected = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isHideSelectedChars

export const selectChangeableTableIsShuffleCells = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isShuffleCellsAfterPress

export const selectChangeableTableIsFlipHorizontally = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isFlipHorizontally

export const selectChangeableTableIsFlipVertically = (state: RootState) =>
   state.tableOptions.changeableAdditionalTableOptions.isFlipVertically
//

//colored
export const selectChangeableTableColorVariant = (state: RootState) =>
   state.tableOptions.changeableColoredTableOptions.colorVariant
export const selectChangeableTableColorVariantTitle = (state: RootState) =>
   state.tableOptions.changeableColoredTableOptions.colorVariant.title

export const selectChangeableTableIsChangeColorsAfterPress = (state: RootState) =>
   state.tableOptions.changeableColoredTableOptions.isChangeColorsAfterPress

export const selectChangeableTableIsAutoChangeColors = (state: RootState) =>
   state.tableOptions.changeableColoredTableOptions.isAutoChangeColors
//

export const selectAvailableTableSizes = (state: RootState) => state.tableOptions.availableTableSizes

export const selectIsShownAdditionalOptions = (state: RootState) => state.tableOptions.shownAdditionalOptions
export const selectIsShownColoredOptions = (state: RootState) => state.tableOptions.shownColoredOptions

export const selectDataTableType = (state: RootState) => state.tableOptions.dataMainTableOptions.type
export const selectDataTableVariant = (state: RootState) => state.tableOptions.dataMainTableOptions.variant
export const selectDataTableMode = (state: RootState) => state.tableOptions.dataMainTableOptions.mode
export const selectDataTableColorVariants = (state: RootState) => state.tableOptions.dataMainTableOptions.colorVariants
