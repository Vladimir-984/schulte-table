import React from 'react'
import { SimpleCell, Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setTableIsShuffleCells } from 'store/slices/tablePramsSlice'
import { selectChangeableTableIsShuffleCells } from 'store/selectors/tableParams'

export const CellTableShuffleCells: React.FC = () => {
   const dispatch = useAppDispatch()

   const isShuffleCells = useAppSelector(selectChangeableTableIsShuffleCells)

   const onChangeTableShuffleCells: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableIsShuffleCells(e.target.checked))
   }
   return (
      <SimpleCell disabled after={<Switch checked={isShuffleCells} onChange={onChangeTableShuffleCells} />}>
         Перемешивать
      </SimpleCell>
   )
}
