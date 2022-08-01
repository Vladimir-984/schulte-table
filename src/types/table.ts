export enum TableType {
   NUMBERS = 'numbers',
   CYRILLIC = 'cyrillic',
   LATIN = 'latin',
}
/**возрастающем порядке черные числа, и в убывающем порядке красные */
export enum TableVariant {
   STANDARD = 'standard',
   GORBOV_1 = 'gorbov_1',
   GROBOV_1 = 'gorbov_2',
   PLATONOV = 'platonov',
}
export enum TableMode {
   CLASSIC = 'classic',
   HARD = 'hard',
   CUSTOM = 'custom',
}

export enum TableSequence {
   DEFAULT = 'default',
   RIGHT = 'right',
   LEFT = 'left',
   RANDOM = 'random',
}
export enum TableCell {
   RECT = 'rect',
   ROUND = 'round',
}
export enum TableColor {
   DEFAULT = 'default',
   RANDOM = 'random',
}

type TypeTableColor = TableColor

export interface ISettingsCells {
   typeCell: TableCell
   colorCell: TypeTableColor
   colorSymdol: TypeTableColor

   markSelectedCells: boolean
   showErrors: boolean
}

export interface ITable {
   tableSize: number
   tableType: TableType
   typeSequence: TableSequence

   cells: ICell[]
   /**добавлять - к значению для идентификации красно-чёрных */
   sequence: string[]

   isShuffleCells: boolean
   isFlipHorizontally: boolean
   isFlipVertically: boolean

   tsStart: number
}

//@ts-ignore
const table: ITable = {}

export interface ICell {
   id: number
   sequenceValue: string

   symbol: ISymbol
   disabledTappable: boolean
   color?: string

   /**для какого то супер режима */
   effect?: string
}

export interface ISymbol {
   id: number
   disabled: boolean
   value: string

   color?: string

   /**для какого то супер режима */
   isFlipHorizontally?: boolean
   /**для какого то супер режима */
   isFlipVertically?: boolean
}
