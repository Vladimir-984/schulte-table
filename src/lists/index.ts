import { TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { TableSequence } from 'types/table'

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

export const TABLE_SEQUENCE = {
   [TableSequence.DEFAULT]: 'По умолчанию',
   [TableSequence.RANDOM]: 'Случайный',
   [TableSequence.RIGHT]: 'Обратный',
}
