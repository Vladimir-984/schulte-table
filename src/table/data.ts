import {
   IAdditionalTableOptionsOfMode,
   IColoredTableOptionsOfMode,
   IGroupOfSymbols,
   ISymbolsRangeOfGroup,
   ITableColorVariant,
   ITableMode,
   ITableType,
   ITableVariant,
} from 'types/table'

export const tableTypes: ITableType[] = [
   { id: '1', name: 'numbers', title: 'Цифры' },
   { id: '2', name: 'latin', title: 'Латиница' },
   { id: '3', name: 'cyrillic', title: 'Кириллица' },
]

export const symbolsRangeOfGroups: ISymbolsRangeOfGroup[] = [
   {
      id: '1',
      groupId: '1',
      case: 'capital',
      range: ['0410', '042F'],
      description: 'Basic Russian alphabet',
      unicodeVersion: '1',
   },
   {
      id: '2',
      groupId: '1',
      case: 'capital',
      range: ['0401', '0401'],
      description: 'Basic Russian alphabet Ё',
      unicodeVersion: '1',
   },
   {
      id: '3',
      groupId: '2',
      case: 'small',
      range: ['0430', '044F'],
      description: 'Basic Russian alphabet',
      unicodeVersion: '1',
   },
   {
      id: '4',
      groupId: '2',
      case: 'small',
      range: ['0451', '0451'],
      description: 'Basic Russian alphabet ё',
      unicodeVersion: '1',
   },

   {
      id: '5',
      groupId: '3',
      case: 'capital',
      range: ['0400', '0400'],
      description: 'Cyrillic extensions',
      unicodeVersion: '1',
   },
   {
      id: '6',
      groupId: '3',
      case: 'capital',
      range: ['0402', '040F'],
      description: 'Cyrillic extensions',
      unicodeVersion: '1',
   },
   {
      id: '7',
      groupId: '4',
      case: 'small',
      range: ['0450', '0450'],
      description: 'Cyrillic extensions',
      unicodeVersion: '1',
   },
   {
      id: '8',
      groupId: '4',
      case: 'small',
      range: ['0452', '045F'],
      description: 'Cyrillic extensions',
      unicodeVersion: '1',
   },
   {
      id: '9',
      groupId: '5',
      case: 'all',
      range: ['0460', '0477'],
      description: 'Historic letters',
      unicodeVersion: '1',
   },
   {
      id: '10',
      groupId: '6',
      case: 'all',
      range: ['0482', '0482'],
      description: 'Historic miscellaneous',
      unicodeVersion: '1',
   },
   {
      id: '11',
      groupId: '7',
      case: 'all',
      range: ['048A', '04BF'],
      description: 'Extended Cyrillic',
      unicodeVersion: '1',
   },
   {
      id: '12',
      groupId: '7',
      case: 'capital',
      range: ['04C0', '04C0'],
      description: 'Extended Cyrillic capital palochka',
      unicodeVersion: '1',
   },
   {
      id: '13',
      groupId: '7',
      case: 'all',
      range: ['04C1', '04CE'],
      description: 'Extended Cyrillic',
      unicodeVersion: '1',
   },
   {
      id: '14',
      groupId: '7',
      case: 'small',
      range: ['04CF', '04CF'],
      description: 'Extended Cyrillic small palochka',
      unicodeVersion: '1',
   },
   {
      id: '15',
      groupId: '7',
      case: 'all',
      range: ['04D0', '04F9'],
      description: 'Extended Cyrillic',
      unicodeVersion: '1',
   },
   {
      id: '16',
      groupId: '8',
      case: 'all',
      range: ['04FA', '04FF'],
      description: 'Additions for Nivkh',
      unicodeVersion: '1',
   },
]
export const groupsOfSymbols: IGroupOfSymbols[] = [
   {
      id: '1',
      name: 'Basic Russian capital alphabet',
      index: 1,
      typeId: '3',
   },
   {
      id: '2',
      name: 'Basic Russian small alphabet',
      index: 2,
      typeId: '3',
   },
   {
      id: '3',
      name: 'Cyrillic extensions capital',
      index: 5,
      typeId: '3',
   },
   {
      id: '4',
      name: 'Cyrillic extensions small',
      index: 7,
      typeId: '3',
   },
   {
      id: '5',
      name: 'Historic letters',
      index: 9,
      typeId: '3',
   },
   {
      id: '6',
      name: 'Historic miscellaneous',
      index: 11,
      typeId: '3',
   },
   {
      id: '7',
      name: 'Extended Cyrillic',
      index: 12,
      typeId: '3',
   },
   {
      id: '8',
      name: 'Additions for Nivkh',
      index: 17,
      typeId: '3',
   },
]

/**возрастающем порядке черные числа, и в убывающем порядке красные */
export const tableVariants: ITableVariant[] = [
   { id: '1', name: 'standard', title: 'Стандартный' },
   { id: '2', name: 'gorbov', title: 'Шульте-Горбова' },
   { id: '3', name: 'color', title: 'Цветной' },
]

export const tableModes: ITableMode[] = [
   { id: '1', name: 'classic', title: 'Классический' },
   { id: '2', name: 'hard', title: 'Сложный' },
   { id: '3', name: 'custom', title: 'Настраиваемый' },
]
export const colorVariants: ITableColorVariant[] = [
   { id: '1', name: 'cell', title: 'Ячейка' },
   { id: '2', name: 'symbol', title: 'Символ' },
   { id: '3', name: 'all', title: 'Ячейка и символ' },
]

export const additionalTableOptionsOfModes: IAdditionalTableOptionsOfMode[] = [
   {
      id: '1',
      modeId: '1',
      size: 5,
      isFlipHorizontally: false,
      isFlipVertically: false,
      isShuffleCellsAfterPress: false,
   },
   {
      id: '2',
      modeId: '2',
      size: 7,
      isFlipHorizontally: false,
      isFlipVertically: false,
      isShuffleCellsAfterPress: true,
   },
]
export const coloredTableOptionsOfModes: IColoredTableOptionsOfMode[] = [
   {
      id: '1',
      modeId: '1',
      colorVariant: colorVariants[0],
      isAutoChangeColors: false,
      isChangeColorsAfterPress: false,
   },
   {
      id: '2',
      modeId: '2',
      colorVariant: colorVariants[2],
      isAutoChangeColors: true,
      isChangeColorsAfterPress: true,
   },
]
