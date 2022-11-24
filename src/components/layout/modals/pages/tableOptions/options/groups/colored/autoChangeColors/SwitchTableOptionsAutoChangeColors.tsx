import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsAutoChangeColors } from 'store/selectors/tableOptions'
import { setColoredTableOptionsIsAutoChangeColors } from 'store/slices/tableOptions'

export const SwitchTableOptionsAutoChangeColors: React.FC = () => {
   const dispatch = useAppDispatch()
   const isAutoChangeColors = useAppSelector(selectChangeableTableIsAutoChangeColors)
   const onChangeIsAutoChangeColors: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setColoredTableOptionsIsAutoChangeColors(e.target.checked))
   }
   return <Switch checked={isAutoChangeColors} onChange={onChangeIsAutoChangeColors} />
}
