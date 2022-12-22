// export type TypeShapeCell = 'square' | 'round' | 'rounded-square'

export type TypeTableVariant = 'standard' | 'gorbov'

export type TypeTableColored = 'background' | 'symbol' | 'all' | 'none'

export type TypeTableSequence = 'default' | 'reverse' | 'random'

export type TypeTableStyleSelected = 'hide' | 'hide_symbol' | 'opacity_symbol' | 'default'

// export type TypeTableTransform = 'turn_random' | 'flip_random' | 'flip_both' | 'flip_x' | 'flip_y' | 'none'

export type TypeTableTransform = 'isTurn' | 'isFlipX' | 'isFlipY'

export interface IListItem<T> {
   id: string
   value: T
   title: string
   description?: string
}

export type ITableSize = IListItem<number>
export type ITableVariant = IListItem<TypeTableVariant>
export type ITableColored = IListItem<TypeTableColored>
// export type ITableCellShape = IListItem<TypeShapeCell>
export type ITableSequence = IListItem<TypeTableSequence>
export type ITableStyleSelected = IListItem<TypeTableStyleSelected>

export type ITableTransform = IListItem<TypeTableTransform>

export type ITableTransforms = Record<TypeTableTransform, boolean>

export interface ITableOptions {
   size: ITableSize
   variant: ITableVariant
   directionSequence: ITableSequence
   isPressOnSymbols: boolean

   isShuffleCellsAfterSelect: boolean
   //TODO
   transforms?: ITableTransforms
   styleSelected: ITableStyleSelected

   isChangeTransformAfterSelect: boolean

   isColoredSymbols: boolean
   isUpdateColorsAfterSelect: boolean

   isShowCurrentSymbol: boolean
   isShowTimeTable: boolean

   // isAutoChangeColors: boolean
   // cellShape: ITableCellShape
   // timer: number
}

// isTerminateOnWrongPress?: boolean

// export type TypeRedBlackVariant = 'background' | 'char'

export type TypeTappableMode = 'opacity' | 'background'

export type TypeColorModePrimaryOrSecondary = 'primary' | 'secondary'
export type TypeBackgroundColorMode = TypeRedBlack | TypeColorModePrimaryOrSecondary | 'custom' //| string

// export type TypeTransformSymbol = 'turn-90' | 'turn-180' | 'turn-270' | 'flip-x' | 'flip-y' | 'flip-both' | string

export interface ICellTransforms {
   [key: string]: string | number
}
export type TypeVisibilityCell = 'visible' | 'hidden' | 'hidden_symbol' | 'translucent_symbol'

export interface ICell {
   id: string
   symbol: ISymbol
   tappable?: ICellTappable
   background: ICellBackground
   animation?: string

   visibility?: TypeVisibilityCell

   transforms?: ICellTransforms
}
export interface ICellTappable {
   tappableMode: TypeTappableMode
   isTappableDisabled?: boolean
}
export interface ICellBackground {
   backgroundColorMode: TypeBackgroundColorMode
   backgroundColor?: string
   // backgroundShadow?: boolean
}
/**
 * `primary` - цвет зависит от темы;
 * `custom` - устанавлиет цвет из `color`;
 * `white` - для красно-чёрной таблицы;
 */
export type TypeSymbolColorMode = TypeRedBlack | TypeColorModePrimaryOrSecondary | 'white' | 'custom'

export type TypeVisibilitySymbol = 'visible' | 'hidden' | 'translucent'

export interface ISymbol {
   value: string

   colorMode: TypeSymbolColorMode
   color?: string

   // animation?: string
}

export type TypeRedBlack = 'red' | 'black'

export type TypeTableStatus = 'started' | 'done' | 'terminated' | 'closed' | null

export interface ICurrentSequenceCell extends Pick<ICell, 'id' | 'symbol' | 'background'> {}

export interface IHistoryChangesDisplayedCells {
   displayedCells: ICell[]
   ts: number
}

export interface ITable {
   sequence: string[]
   displayedCells: ICell[]
   sequenceCells: ICell[]

   historyChangesDisplayedCells: IHistoryChangesDisplayedCells[]
   clickedCells: IClickedCell[]

   startedAt: number | null
   completedAt: number | null

   status: TypeTableStatus
}
export interface IActiveTableData extends ITable {
   idxOfCurrentCellInSequence: number
   currentSequenceCell: ICurrentSequenceCell | null
}

/**
 * `mistake` - неверный клик - ошибка
 * `mark` - правильный клик
 * `repeated` - клик по `mark` ячейке
 */
export type TypeClickedCellAction = 'correct' | 'wrong'

export interface IClickedCell {
   cell: ICell
   action: TypeClickedCellAction
   ts: number
}
