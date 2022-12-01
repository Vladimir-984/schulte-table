import { TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { TableSequence } from 'types/table'

export const APPEARANCE_TYPE: { [P in TypeApplicationAppearance]: string } = {
   auto: 'Системная',
   light: 'Светлая',
   dark: 'Тёмная',
}

export const TABLE_SEQUENCE = {
   [TableSequence.DEFAULT]: 'По умолчанию',
   [TableSequence.RANDOM]: 'Случайный',
   [TableSequence.RIGHT]: 'Обратный',
}
