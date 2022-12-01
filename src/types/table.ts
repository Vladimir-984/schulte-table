export type TypeCaseGroupOfChars = 'all' | 'small' | 'capital'
export type TypeRange = [string, string]

export type TypeTableColorVariant = 'background' | 'char' | 'all'

export interface IGroupOfChars {
   id: string
   typeId: string
   name: string
   description?: string
   index: number
}

export interface ICharsRangeOfGroup {
   id: string
   groupId: string
   description?: string
   range: TypeRange
   case: TypeCaseGroupOfChars

   unicodeVersion: string
}

export interface ITableType {
   id: string
   name: string
   title: string
}

/** 1 проп showVariantOptions */
export type TypeShowVariantOptions = 'red-black' | 'colored'
export interface ITableVariant {
   id: string
   name: string
   title: string
   showVariantOptions?: TypeShowVariantOptions
   description?: string
}
export interface ITableMode {
   id: string
   name: string
   title: string
   isShowOptions?: boolean
   description?: string
}
export interface ITableColorVariant {
   id: string
   name: string
   title: string
   description?: string
}
export interface ITableRedBlackVariant {
   id: string
   name: string
   title: string
   description?: string
}

export interface IAdditionalTableOptionsOfMode extends IAdditionalTableOptions {
   id: string
   modeId: string
}
export interface IColoredTableOptionsOfMode extends IColoredTableOptions {
   id: string
   modeId: string
}

/**возрастающем порядке черные числа, и в убывающем порядке красные */
enum TableVariant {
   STANDARD = 'standard',
   GORBOV = 'gorbov',
   // PLATONOV = 'platonov',
}
export enum TableSequence {
   DEFAULT = 'default',
   RIGHT = 'right',
   RANDOM = 'random',
}
export interface ITableCellShape {
   id: string
   name: string
   title: string
}
export interface ITableHintTimeout {
   id: string
   value: number
   title: string
}
export interface ITableHintStyle {
   id: string
   value: string
   title: string
}

export interface IMainTableOptions {
   type: ITableType
   variant: ITableVariant
   mode: ITableMode
}
export interface IAdditionalTableOptions {
   size: number

   isHideSelectedChars: boolean
   isShuffleCellsAfterPress: boolean
   isFlipHorizontally: boolean
   isFlipVertically: boolean
}

export interface IColoredTableOptions {
   colorVariant: ITableColorVariant

   isChangeColorsAfterPress: boolean
   isAutoChangeColors: boolean
}

export interface IRedBlackTableOptions {
   redBlackVariant: ITableRedBlackVariant
}

export interface IDisplayTableOptions {
   isShowTime: boolean

   cellsShape: ITableCellShape
   cellsIsEnabledShadow: boolean

   isShowCorrect: boolean
   //Анимация, если не та ячейка
   isShowMistakes: boolean
}
// isTerminateOnWrongPress?: boolean

export interface IHintsTableOptions {
   isEnabledHints: boolean
   timeoutHints: number
   styleHints: ITableHintStyle
}

export interface ITableOptions {
   mainOptions: IMainTableOptions
   additionalOptions: IAdditionalTableOptions
   coloredOptions: IColoredTableOptions
   redBlackOptions: IRedBlackTableOptions
   display: IDisplayTableOptions
   hints: IHintsTableOptions
}

export type TypeShapeCell = 'square' | 'round' | 'rounded-square'
export type TypeRedBlackVariant = 'background' | 'char'

/** @deprecated */
export type TypeOutlineCell = 'primary' | 'secondary'

export type TypeTappableMode = 'opacity' | 'background'

export type TypeColorModeCell = TypeRedBlack | 'secondary' | 'custom' | 'none'

export interface ICell {
   id: string
   char: IChar
   shape: TypeShapeCell
   tappable?: ICellTappable
   background?: ICellBackground
   /**
    * @deprecated
    */
   borderRadius?: number | string
   /**
    * @deprecated
    */
   outline?: TypeOutlineCell
   animation?: string
}
export interface ICellTappable {
   tappableMode?: TypeTappableMode
   isTappableDisabled?: boolean
}
export interface ICellBackground {
   backgroundColorMode?: TypeColorModeCell
   backgroundColor?: string
   backgroundShadow?: boolean
}
/**
 * `primary` - цвет зависит от темы;
 * `custom` - устанавлиет цвет из `color`;
 * `white` - для красно-чёрной таблицы;
 */
export type TypeColorModeChar = TypeRedBlack | 'primary' | 'white' | 'custom'
export type TypeVisibilityChar = 'visible' | 'hidden'

export interface IChar {
   value: string

   visibility?: TypeVisibilityChar
   colorMode?: TypeColorModeChar
   color?: string
   // animation?: string

   isFlipHorizontally?: boolean
   isFlipVertically?: boolean
}

export type TypeRedBlack = 'red' | 'black'
