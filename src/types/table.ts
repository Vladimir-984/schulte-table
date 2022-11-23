export type TypeCaseGroupOfSymbols = 'all' | 'small' | 'capital'
export type TypeRange = [string, string]

export interface IGroupOfSymbols {
   id: string
   typeId: string
   name: string
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

export interface IAdditionalTableOptionsOfMode extends IAdditionalTableOptions {
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

   isColoredSymbols: boolean
   isColoredCells: boolean

   isShuffleCellsAfterPress: boolean
   isChangeColorsAfterPress: boolean
   isFlipHorizontally: boolean
   isFlipVertically: boolean

   isChangeColorsPartCells: boolean
}
export interface ITableOptions extends IMainTableOptions, IAdditionalTableOptions {}

export type TypeOutlineCell = 'primary' | 'secondary'
export type TypeTappableMode = 'opacity' | 'background'

export type TypeColorCell = TypeRedBlack | 'custom' | 'none'

export interface ICell {
   id: string
   symbol: ISymbol
   tappableMode?: TypeTappableMode
   isTappableDisabled?: boolean

   typeOutline?: TypeOutlineCell
   typeColor?: TypeColorCell
   color?: string

   animation?: string
}

/**
 * `primary` - цвет зависит от темы;
 * `custom` - устанавлиет цвет из `color`;
 * `white` - для красно-чёрной таблицы;
 */
export type TypeColorSymbol = 'primary' | 'white' | 'custom'

export interface ISymbol {
   id: string
   value: string

   disabled?: boolean
   typeColor?: TypeColorSymbol
   color?: string
   // animation?: string

   isFlipHorizontally?: boolean
   isFlipVertically?: boolean
}

export type TypeRedBlack = 'red' | 'black'

//TODO
const getTypeColor = (modeRedBlack: TypeRedBlack | undefined, color: string | undefined) => {
   if (!!modeRedBlack) {
      return 'white'
   }
   if (!!color) {
      return 'custom'
   }
   return 'primary'
}
