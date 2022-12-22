import {
   // ITableCellShape,
   // ITableColored,
   ITableSequence,
   ITableStyleSelected,
   ITableTransform,
   ITableVariant,
   // TypeTableTransform,
} from 'types/table'

/*  const charsRangeOfGroups = [
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
 const groupsOfChars = [
   {
      id: '1',
      value: 'Basic Russian capital alphabet',
      priority: 1,
      charsRanges: charsRangeOfGroups.filter((charsRange) => charsRange.groupId === '1'),
      typeId: '3',
   },
   {
      id: '2',
      value: 'Basic Russian small alphabet',
      priority: 2,
      charsRanges: charsRangeOfGroups.filter((charsRange) => charsRange.groupId === '2'),
      typeId: '3',
   },
   {
      id: '3',
      value: 'Cyrillic extensions capital',
      priority: 5,
      charsRanges: charsRangeOfGroups.filter((charsRange) => charsRange.groupId === '3'),
      typeId: '3',
   },
   {
      id: '4',
      value: 'Cyrillic extensions small',
      priority: 7,
      charsRanges: charsRangeOfGroups.filter((charsRange) => charsRange.groupId === '4'),
      typeId: '3',
   },
   {
      id: '5',
      value: 'Historic letters',
      priority: 9,
      charsRanges: charsRangeOfGroups.filter((charsRange) => charsRange.groupId === '5'),
      typeId: '3',
   },
   {
      id: '6',
      value: 'Historic miscellaneous',
      priority: 11,
      charsRanges: charsRangeOfGroups.filter((charsRange) => charsRange.groupId === '6'),
      typeId: '3',
   },
   {
      id: '7',
      value: 'Extended Cyrillic',
      priority: 12,
      charsRanges: charsRangeOfGroups.filter((charsRange) => charsRange.groupId === '7'),
      typeId: '3',
   },
   {
      id: '8',
      value: 'Additions for Nivkh',
      priority: 17,
      charsRanges: charsRangeOfGroups.filter((charsRange) => charsRange.groupId === '8'),
      typeId: '3',
   },
]

 const tableTypes = [
   {
      id: '1',
      value: 'numbers',
      title: 'Цифры',
      groupsCharsRanges: groupsOfChars.filter((groupCharsRanges) => groupCharsRanges.typeId === '1'),
   },
   {
      id: '2',
      value: 'latin',
      title: 'Латиница',
      groupsCharsRanges: groupsOfChars.filter((groupCharsRanges) => groupCharsRanges.typeId === '2'),
   },
   {
      id: '3',
      value: 'cyrillic',
      title: 'Кириллица',
      groupsCharsRanges: groupsOfChars.filter((groupCharsRanges) => groupCharsRanges.typeId === '3'),
   },
] */

/**возрастающем порядке черные числа, и в убывающем порядке красные */
export const tableVariants: ITableVariant[] = [
   { id: '1', value: 'standard', title: 'Стандартный' },
   { id: '2', value: 'gorbov', title: 'Шульте-Горбова' },
]

/* const tableColoredVariants: ITableColored[] = [
   { id: 'none', value: 'none', title: 'Нет' },
   { id: 'background', value: 'background', title: 'Фон' },
   { id: 'symbol', value: 'symbol', title: 'Символ' },
   { id: 'all', value: 'all', title: 'Фон и символ' },
] */

/* export const tableCellsShapes: ITableCellShape[] = [
   // { id: '1', value: 'square', title: 'Квадрат' },
   { id: '3', value: 'rounded-square', title: 'Квадрат скруглённый' },
   { id: '2', value: 'round', title: 'Круг' },
] */

export const defaultTableDirectionSequence: ITableSequence = { id: '1', value: 'default', title: 'Прямой' } // По умолчанию

export const tableSequences: ITableSequence[] = [
   { ...defaultTableDirectionSequence },
   { id: '2', value: 'reverse', title: 'Обратный' },
   { id: '3', value: 'random', title: 'Случайный' },
]

export const tableStylesSelected: ITableStyleSelected[] = [
   { id: '1', value: 'default', title: 'default' },
   { id: '2', value: 'hide', title: 'hide' },
   { id: '3', value: 'hide_symbol', title: 'hide_symbol' },
   { id: '4', value: 'opacity_symbol', title: 'opacity_symbol' },
]
export const tableTransforms: ITableTransform[] = [
   { id: '1', value: 'isTurn', title: 'Поворот' },
   { id: '2', value: 'isFlipX', title: 'Отражение по горизонтали' },
   { id: '3', value: 'isFlipY', title: 'Отражение по вертикали' },
   // { id: '4', value: 'isSpin', title: 'Вращение' },
]
