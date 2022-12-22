import { RootState } from 'store'

//main
/* export const selectChangeableTableType = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.type
export const selectChangeableTableTypeTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.type.title
 */
export const selectChangeableTableVariant = (state: RootState) => state.tableOptions.changeableTableOptions.variant
export const selectChangeableTableVariantTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.variant.title

/* export const selectChangeableTableMode = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.mode
export const selectChangeableTableModeTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.mainOptions.mode.title */
//

export const selectChangeableTableSize = (state: RootState) => state.tableOptions.changeableTableOptions.size
export const selectChangeableTableSizeTitle = (state: RootState) => state.tableOptions.changeableTableOptions.size.title

export const selectChangeableTableTransforms = (state: RootState) =>
   state.tableOptions.changeableTableOptions.transforms

export const selectChangeableTableDirectionSequence = (state: RootState) =>
   state.tableOptions.changeableTableOptions.directionSequence

export const selectChangeableTableDirectionSequenceTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.directionSequence.title

export const selectChangeableTableIsPressOnSymbols = (state: RootState) =>
   state.tableOptions.changeableTableOptions.isPressOnSymbols

export const selectChangeableTableIsShuffleCells = (state: RootState) =>
   state.tableOptions.changeableTableOptions.isShuffleCellsAfterSelect

export const selectChangeableTableStyleSelected = (state: RootState) =>
   state.tableOptions.changeableTableOptions.styleSelected
export const selectChangeableTableStyleSelectedTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.styleSelected.title
//colored
export const selectChangeableTableIsColoredSymbols = (state: RootState) =>
   state.tableOptions.changeableTableOptions.isColoredSymbols

export const selectChangeableTableIsUpdateColorsAfterSelect = (state: RootState) =>
   state.tableOptions.changeableTableOptions.isUpdateColorsAfterSelect

//

/* //redBlack
export const selectChangeableTableRedBlackVariant = (state: RootState) =>
   state.tableOptions.changeableTableOptions.redBlackOptions.redBlackVariant
export const selectChangeableTableRedBlackVariantTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.redBlackOptions.redBlackVariant.title
// */

//display
/* export const selectChangeableTableDisplayCellsShape = (state: RootState) =>
   state.tableOptions.changeableTableOptions.cellShape

export const selectChangeableTableDisplayCellsShapeTitle = (state: RootState) =>
   state.tableOptions.changeableTableOptions.cellShape.title */

/* export const selectChangeableTableDisplayCellsIsEnabledShadow = (state: RootState) =>
   state.tableOptions.changeableTableOptions.isShowCellShadow
    */

export const selectChangeableTableDisplayIsShowTimeTable = (state: RootState) =>
   state.tableOptions.changeableTableOptions.isShowTimeTable
export const selectChangeableTableIsShowCurrentSymbol = (state: RootState) =>
   state.tableOptions.changeableTableOptions.isShowCurrentSymbol

export const selectAvailableTableSizes = (state: RootState) => state.tableOptions.availableTableSizes

export const selectIsDisabledChangeDirectionSequence = (state: RootState) =>
   state.tableOptions.isDisabledChangeDirectionSequence
export const selectIsDisabledChangeShowCurrentSymbol = (state: RootState) =>
   state.tableOptions.isDisabledChangeShowCurrentSymbol
export const selectIsDisabledChangeUpdateColorsAfterSelect = (state: RootState) =>
   state.tableOptions.isDisabledChangeUpdateColorsAfterSelect

/* export const selectIsShownAdditionalOptions = (state: RootState) => state.tableOptions.shownCustomAdditionalOptions
export const selectIsShownColoredOptions = (state: RootState) => state.tableOptions.shownCustomColoredOptions
export const selectIsShownRedBlackOptions = (state: RootState) => state.tableOptions.shownCustomRedBlackOptions
 */

export const selectDataTableVariants = (state: RootState) => state.tableOptions.dataTableOptions.variants

export const selectDataTableTransforms = (state: RootState) => state.tableOptions.dataTableOptions.transforms

export const selectDataTableStylesSelected = (state: RootState) => state.tableOptions.dataTableOptions.stylesSelected

export const selectDataTableDirectionSequences = (state: RootState) =>
   state.tableOptions.dataTableOptions.directionSequences

// export const selectDataTableCellsShapes = (state: RootState) => state.tableOptions.dataTableOptions.cellsShapes
