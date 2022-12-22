import { TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { IListItem } from 'types/table'

export const dataAppearances: IListItem<TypeApplicationAppearance>[] = [
   { id: '1', value: 'auto', title: 'Системная' },
   { id: '2', value: 'light', title: 'Светлая' },
   { id: '3', value: 'dark', title: 'Тёмная' },
]
