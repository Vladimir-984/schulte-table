import { APPEARANCE_TYPE, HINTS_STYLE_TYPE, TableHintsStyle, TABLE_COLOR_TYPE } from 'lists'
import { TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { IListItem } from 'types/list'
import { TableColor } from 'types/table'
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
