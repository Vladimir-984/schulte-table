import { IAdditionalTableOptionsOfMode, IGroupOfSymbols, ITableMode, ITableType, ITableVariant } from 'types/table'

export const tableTypes: ITableType[] = [
   { id: '1', name: 'numbers', title: 'Цифры' },
   { id: '2', name: 'latin', title: 'Латиница' },
   { id: '3', name: 'cyrillic', title: 'Кириллица' },
]

export const groupsOfSymbols: IGroupOfSymbols[] = [
   {
      id: '1',
      case: 'capital',
      name: 'Basic Russian alphabet',
      range: ['0410', '042F'],
      unicodeVersion: '1',
      typeId: '3',
   },
   {
      id: '2',
      case: 'capital',
      name: 'Basic Russian alphabet Ё',
      range: ['0401', '0401'],
      unicodeVersion: '1',
      typeId: '3',
   },
   {
      id: '3',
      case: 'capital',
      name: 'Cyrillic extensions 1',
      range: ['0400', '0400'],
      unicodeVersion: '1',
      typeId: '3',
   },
   {
      id: '4',
      case: 'capital',
      name: 'Cyrillic extensions 2',
      range: ['0402', '040F'],
      unicodeVersion: '1',
      typeId: '3',
   },

   {
      id: '5',
      case: 'small',
      name: 'Basic Russian alphabet',
      range: ['0430', '044F'],
      unicodeVersion: '1',
      typeId: '3',
   },
   {
      id: '6',
      case: 'small',
      name: 'Basic Russian alphabet ё',
      range: ['0451', '0451'],
      unicodeVersion: '1',
      typeId: '3',
   },
   { id: '7', case: 'small', name: 'Cyrillic extensions', range: ['0450', '0450'], unicodeVersion: '1', typeId: '3' },
   { id: '8', case: 'small', name: 'Cyrillic extensions', range: ['0452', '045F'], unicodeVersion: '1', typeId: '3' },

   { id: '9', case: 'all', name: 'Historic letters', range: ['0460', '0477'], unicodeVersion: '1', typeId: '3' },
   { id: '10', case: 'all', name: 'Historic letters', range: ['047A', '0481'], unicodeVersion: '1', typeId: '3' },
   { id: '11', case: 'all', name: 'Historic miscellaneous', range: ['0482', '0482'], unicodeVersion: '1', typeId: '3' },

   { id: '12', case: 'all', name: 'Extended Cyrillic', range: ['048A', '04BF'], unicodeVersion: '1', typeId: '3' },
   {
      id: '13',
      case: 'capital',
      name: 'Extended Cyrillic capital palochka',
      range: ['04C0', '04C0'],
      unicodeVersion: '1',
      typeId: '3',
   },
   { id: '14', case: 'all', name: 'Extended Cyrillic', range: ['04C1', '04CE'], unicodeVersion: '1', typeId: '3' },
   {
      id: '15',
      case: 'small',
      name: 'Extended Cyrillic small palochka',
      range: ['04CF', '04CF'],
      unicodeVersion: '1',
      typeId: '3',
   },
   { id: '16', case: 'all', name: 'Extended Cyrillic', range: ['04D0', '04F9'], unicodeVersion: '1', typeId: '3' },

   { id: '17', case: 'all', name: 'Additions for Nivkh', range: ['04FA', '04FF'], unicodeVersion: '1', typeId: '3' },
]

/**возрастающем порядке черные числа, и в убывающем порядке красные */
export const tableVariants: ITableVariant[] = [
   { id: '1', name: 'standard', title: 'Стандартный' },
   { id: '2', name: 'gorbov', title: 'Шульте-Горбова' },
]

export const tableModes: ITableMode[] = [
   { id: '1', name: 'classic', title: 'Классический' },
   { id: '2', name: 'hard', title: 'Сложный' },
   { id: '3', name: 'custom', title: 'Настраиваемый' },
]

export const additionalTableOptionsOfModes: IAdditionalTableOptionsOfMode[] = [
   {
      id: '1',
      modeId: '1',
      size: 5,
      isColoredCells: false,
      isColoredSymbols: false,
      isChangeColorsAfterPress: false,
      isChangeColorsPartCells: false,
      isFlipHorizontally: false,
      isFlipVertically: false,
      isShuffleCellsAfterPress: false,
   },
   {
      id: '2',
      modeId: '2',
      size: 7,
      isColoredCells: false,
      isColoredSymbols: false,
      isChangeColorsAfterPress: true,
      isChangeColorsPartCells: false,
      isFlipHorizontally: false,
      isFlipVertically: false,
      isShuffleCellsAfterPress: true,
   },
]
