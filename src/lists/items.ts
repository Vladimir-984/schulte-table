import {
   APPEARANCE_TYPE,
   HINTS_STYLE_TYPE,
   TableHintsStyle,
   TABLE_COLOR_TYPE,
   TABLE_MODE,
   TABLE_SEQUENCE,
   TABLE_TYPE,
   TABLE_VARIANT,
} from 'lists'
import { TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { IListItem } from 'types/list'
import { TableColor, TableMode, TableSequence, TableType, TableVariant } from 'types/table'
import { secondLongFormatter } from 'utils/format'

export const appearanceItems: IListItem<TypeApplicationAppearance>[] = [
   { value: 'auto', label: APPEARANCE_TYPE['auto'] },
   { value: 'light', label: APPEARANCE_TYPE['light'] },
   { value: 'dark', label: APPEARANCE_TYPE['dark'] },
]

export const hintsStyleItems: IListItem<TableHintsStyle>[] = [
   { value: TableHintsStyle.GLOW, label: HINTS_STYLE_TYPE[TableHintsStyle.GLOW] },
   { value: TableHintsStyle.SCALE, label: HINTS_STYLE_TYPE[TableHintsStyle.SCALE] },
]

// export const hintsTimeoutItems: IListItem<number>[] = [
//    { value: 10, label: secondLongFormatter.format(10) },
//    { value: 15, label: secondLongFormatter.format(15) },
//    { value: 20, label: secondLongFormatter.format(20) },
//    { value: 25, label: secondLongFormatter.format(25) },
//    { value: 30, label: secondLongFormatter.format(30) },
// ]
export const hintsTimeoutItems: IListItem<number>[] = new Array(5).fill('').map((_, idx) => {
   const value = (idx + 1) * 10 - idx * 5
   return { value, label: secondLongFormatter.format(value) }
})

export const tableColorItems: IListItem<TableColor>[] = [
   { value: TableColor.DEFAULT, label: TABLE_COLOR_TYPE[TableColor.DEFAULT] },
   { value: TableColor.RANDOM, label: TABLE_COLOR_TYPE[TableColor.RANDOM] },
]

export const tableModeItems: IListItem<TableMode>[] = [
   { value: TableMode.CLASSIC, label: TABLE_MODE[TableMode.CLASSIC], description: '' },
   { value: TableMode.CUSTOM, label: TABLE_MODE[TableMode.CUSTOM], description: '' },
   { value: TableMode.HARD, label: TABLE_MODE[TableMode.HARD], description: '' },
]

export const tableSequenceItems: IListItem<TableSequence>[] = [
   { value: TableSequence.DEFAULT, label: TABLE_SEQUENCE[TableSequence.DEFAULT], description: 'desc' },
   { value: TableSequence.RANDOM, label: TABLE_SEQUENCE[TableSequence.RANDOM], description: 'desc' },
   { value: TableSequence.RIGHT, label: TABLE_SEQUENCE[TableSequence.RIGHT], description: 'desc' },
]

export const tableTypeItems: IListItem<TableType>[] = [
   { value: TableType.NUMBERS, label: TABLE_TYPE[TableType.NUMBERS] },
   { value: TableType.LATIN, label: TABLE_TYPE[TableType.LATIN] },
   { value: TableType.CYRILLIC, label: TABLE_TYPE[TableType.CYRILLIC] },
]

export const tableVariantItems: IListItem<TableVariant>[] = [
   { value: TableVariant.STANDARD, label: TABLE_VARIANT[TableVariant.STANDARD], description: 'desc' },
   { value: TableVariant.GORBOV, label: TABLE_VARIANT[TableVariant.GORBOV], description: 'desc' },
]