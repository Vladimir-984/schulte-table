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

export interface ISettingsCells {
   colorCell: TableColor
   colorSymdol: TableColor

   markSelectedCells: boolean
   showErrors: boolean
}

export interface IMainTableParams {
   tableType: TableType
   tableVariant: TableVariant
   tableMode: TableMode
}
export interface ICustomTableParams {
   tableSize: number
   tableSequence: TableSequence

   tableIsShuffleCells: boolean
   tableIsFlipHorizontally: boolean
   tableIsFlipVertically: boolean
}

export interface IT {
   cells: ICell[]
   sequence: string[]

   tsStart: number
}

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
