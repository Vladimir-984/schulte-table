import { TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { TableColor, TableMode, TableSequence, TableType, TableVariant } from 'types/table'

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

export const TABLE_MODE = {
   [TableMode.CLASSIC]: 'Классический',
   [TableMode.CUSTOM]: 'Настраиваемый',
   [TableMode.HARD]: 'Сложный',
}

export const TABLE_SEQUENCE = {
   [TableSequence.DEFAULT]: 'По умолчанию',
   [TableSequence.RANDOM]: 'Случайный',
   [TableSequence.RIGHT]: 'Обратный',
}

export const TABLE_TYPE = {
   [TableType.NUMBERS]: 'Цифры',
   [TableType.LATIN]: 'Латиница',
   [TableType.CYRILLIC]: 'Кириллица',
}

export const TABLE_VARIANT = {
   [TableVariant.STANDARD]: 'Стандартный',
   [TableVariant.GORBOV]: 'Шульте-Горбова',
}
