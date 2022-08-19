export enum TableType {
   NUMBERS = 'numbers',
   CYRILLIC = 'cyrillic',
   LATIN = 'latin',
}

/**возрастающем порядке черные числа, и в убывающем порядке красные */
export enum TableVariant {
   STANDARD = 'standard',
   GORBOV = 'gorbov',
   // PLATONOV = 'platonov',
}
export enum TableMode {
   CLASSIC = 'classic',
   HARD = 'hard',
   CUSTOM = 'custom',
}

export enum TableSequence {
   DEFAULT = 'default',
   RIGHT = 'right',
   RANDOM = 'random',
}

export enum TableColor {
   DEFAULT = 'default',
   RANDOM = 'random',
}

export interface ITableParams {
   tableType: TableType
   tableVariant: TableVariant
   tableMode: TableMode
   tableSize: number

   tableIsShuffleCells: boolean
   tableIsFlipHorizontally: boolean
   tableIsFlipVertically: boolean
}

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
   sequenceItemIdx: number

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
