import React from 'react'
import { SimpleCell, Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsFlipHorizontally } from 'store/selectors/tableParams'
import { setTableIsFlipHorizontally } from 'store/slices/tablePramsSlice'

export const CellTableFlipHorizontallyCell: React.FC = () => {
   const dispatch = useAppDispatch()
   const isFlipHorizontally = useAppSelector(selectChangeableTableIsFlipHorizontally)
   const onChangeFlipHorizontally: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableIsFlipHorizontally(e.target.checked))
   }
   return (
      <SimpleCell disabled after={<Switch checked={isFlipHorizontally} onChange={onChangeFlipHorizontally} />}>
         Отразить по горизонтали
      </SimpleCell>
   )
}
