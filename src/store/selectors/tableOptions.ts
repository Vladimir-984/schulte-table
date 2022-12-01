import { RootState } from 'store'

//main
export const selectChangeableTableType = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.type
export const selectChangeableTableTypeTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.type.title

export const selectChangeableTableVariant = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.variant
export const selectChangeableTableVariantTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.variant.title

export const selectChangeableTableMode = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.mode
export const selectChangeableTableModeTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.mode.title
//

//additional
export const selectChangeableTableSize = (state: RootState) =>
   state.tableOptions.changeableTableOptions.additionalOptions.size
// export const selectChangeableTableSequence = (state: RootState) => state.tableOptions.changeableTableOptions.additionalOptions.tableSequence

export const selectChangeableTableIsHideSelected = (state: RootState) =>
   state.tableOptions.changeableTableOptions.additionalOptions.isHideSelectedChars

export const selectChangeableTableIsShuffleCells = (state: RootState) =>
   state.tableOptions.changeableTableOptions.additionalOptions.isShuffleCellsAfterPress

export const selectChangeableTableIsFlipHorizontally = (state: RootState) =>
   state.tableOptions.changeableTableOptions.additionalOptions.isFlipHorizontally

export const selectChangeableTableIsFlipVertically = (state: RootState) =>
   state.tableOptions.changeableTableOptions.additionalOptions.isFlipVertically
//

//colored
export const selectChangeableTableColorVariant = (state: RootState) =>
   state.tableOptions.changeableTableOptions.coloredOptions.colorVariant
export const selectChangeableTableColorVariantTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.coloredOptions.colorVariant.title

export const selectChangeableTableIsChangeColorsAfterPress = (state: RootState) =>
   state.tableOptions.changeableTableOptions.coloredOptions.isChangeColorsAfterPress

export const selectChangeableTableIsAutoChangeColors = (state: RootState) =>
   state.tableOptions.changeableTableOptions.coloredOptions.isAutoChangeColors
//

//redBlack
export const selectChangeableTableRedBlackVariant = (state: RootState) =>
   state.tableOptions.changeableTableOptions.redBlackOptions.redBlackVariant
export const selectChangeableTableRedBlackVariantTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.redBlackOptions.redBlackVariant.title
//

//display
export const selectChangeableTableDisplayCellsShape = (state: RootState) =>
   state.tableOptions.changeableTableOptions.display.cellsShape
export const selectChangeableTableDisplayCellsShapeTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.display.cellsShape.title

export const selectChangeableTableDisplayCellsIsEnabledShadow = (state: RootState) =>
   state.tableOptions.changeableTableOptions.display.cellsIsEnabledShadow

export const selectChangeableTableDisplayIsShowTime = (state: RootState) =>
   state.tableOptions.changeableTableOptions.display.isShowTime

export const selectChangeableTableDisplayCellsIsShowCorrect = (state: RootState) =>
   state.tableOptions.changeableTableOptions.display.isShowCorrect

export const selectChangeableTableDisplayCellsIsShowMistakes = (state: RootState) =>
   state.tableOptions.changeableTableOptions.display.isShowMistakes
//

//hints
export const selectChangeableTableHintsIsEnabled = (state: RootState) =>
   state.tableOptions.changeableTableOptions.hints.isEnabledHints

export const selectChangeableTableHintsTimeout = (state: RootState) =>
   state.tableOptions.changeableTableOptions.hints.timeoutHints

export const selectChangeableTableHintsStyle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.hints.styleHints
export const selectChangeableTableHintsStyleTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.hints.styleHints.title

//

export const selectAvailableTableSizes = (state: RootState) => state.tableOptions.availableTableSizes

export const selectIsShownAdditionalOptions = (state: RootState) => state.tableOptions.shownAdditionalOptions
export const selectIsShownColoredOptions = (state: RootState) => state.tableOptions.shownColoredOptions
export const selectIsShownRedBlackOptions = (state: RootState) => state.tableOptions.shownRedBlackOptions

export const selectDataTableType = (state: RootState) => state.tableOptions.dataTableOptions.type
export const selectDataTableVariant = (state: RootState) => state.tableOptions.dataTableOptions.variant
export const selectDataTableMode = (state: RootState) => state.tableOptions.dataTableOptions.mode
export const selectDataTableColorVariants = (state: RootState) => state.tableOptions.dataTableOptions.colorVariants
export const selectDataTableRedBlackVariants = (state: RootState) =>
   state.tableOptions.dataTableOptions.redBlackVariants
export const selectDataTableHintsTimeouts = (state: RootState) => state.tableOptions.dataTableOptions.hintTimeouts
export const selectDataTableHintsStyles = (state: RootState) => state.tableOptions.dataTableOptions.hintStyles
export const selectDataTableCellsShapes = (state: RootState) => state.tableOptions.dataTableOptions.cellsShapes
