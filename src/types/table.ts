export type TypeCaseGroupOfSymbols = 'all' | 'small' | 'capital'
export type TypeRange = [string, string]

export type TypeTableColorVariant = 'cell' | 'symbol' | 'all'

export interface IGroupOfSymbols {
   id: string
   typeId: string
   name: string
   description?: string
   index: number
}

export interface ISymbolsRangeOfGroup {
   id: string
   groupId: string
   description?: string
   range: TypeRange
   case: TypeCaseGroupOfSymbols

   unicodeVersion: string
}

export interface ITableType {
   id: string
   name: string
   title: string
}

export interface ITableVariant {
   id: string
   name: string
   title: string
   description?: string
}
export interface ITableMode {
   id: string
   name: string
   title: string
   description?: string
}
export interface ITableColorVariant {
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

export interface IMainTableOptions {
   type: ITableType
   variant: ITableVariant
   mode: ITableMode
}
export interface IAdditionalTableOptions {
   size: number

   isShuffleCellsAfterPress: boolean
   isFlipHorizontally: boolean
   isFlipVertically: boolean
}

export interface IColoredTableOptions {
   colorVariant: ITableColorVariant

   isChangeColorsAfterPress: boolean
   isAutoChangeColors: boolean
}

export interface ITableOptions extends IMainTableOptions, IAdditionalTableOptions {}

export type TypeOutlineCell = 'primary' | 'secondary'
export type TypeTappableMode = 'opacity' | 'background'

export type TypeColorModeCell = TypeRedBlack | 'custom' | 'none'

export interface ICell {
   id: string
   symbol: ISymbol | null
   tappableMode?: TypeTappableMode
   isTappableDisabled?: boolean

   outline?: TypeOutlineCell
   colorMode?: TypeColorModeCell
   color?: string

   animation?: string
}

/**
 * `primary` - цвет зависит от темы;
 * `custom` - устанавлиет цвет из `color`;
 * `white` - для красно-чёрной таблицы;
 */
export type TypeColorModeSymbol = TypeRedBlack | 'primary' | 'white' | 'custom'

export interface ISymbol {
   id: string
   value: string

   disabled?: boolean
   colorMode?: TypeColorModeSymbol
   color?: string
   // animation?: string

   isFlipHorizontally?: boolean
   isFlipVertically?: boolean
}

export type TypeRedBlack = 'red' | 'black'
