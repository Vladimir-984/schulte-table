import React from 'react'
import { SimpleCell, Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsFlipVertically } from 'store/selectors/tableParams'
import { setTableIsFlipVertically } from 'store/slices/tablePramsSlice'

export const CellTableFlipVerticallyCell: React.FC = () => {
   const dispatch = useAppDispatch()
   const isFlipVertically = useAppSelector(selectChangeableTableIsFlipVertically)
   const onChangeFlipVertically: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableIsFlipVertically(e.target.checked))
   }
   return (
      <SimpleCell disabled after={<Switch checked={isFlipVertically} onChange={onChangeFlipVertically} />}>
         Отразить по вертикали
      </SimpleCell>
   )
}
