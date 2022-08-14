import { TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { TableColor } from 'types/table'

export const APPEARANCE_TYPE: { [P in TypeApplicationAppearance]: string } = {
   auto: 'Системная',
   light: 'Светлая',
   dark: 'Тёмная',
}
export enum TableHintsStyle {
   GLOW = 'glow',
   // PULSATION = 'pulsation',
   SCALE = 'scale',
}
export const HINTS_STYLE_TYPE = {
   [TableHintsStyle.GLOW]: 'Свечение',
   [TableHintsStyle.SCALE]: 'Увеличение',
   // [TableHintsStyle.PULSATION]: '',
}
export const TABLE_COLOR_TYPE = {
   [TableColor.DEFAULT]: 'По умолчанию',
   [TableColor.RANDOM]: 'Случайный',
}
