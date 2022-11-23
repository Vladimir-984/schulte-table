import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsAutochangeColorsCells } from 'store/selectors/tableOptions'
import { setAdditionalTableOptionsIsAutochangeColors } from 'store/slices/tableOptions'

export const SwitchTableOptionsAutochangeColors: React.FC = () => {
   const dispatch = useAppDispatch()
   const isAutochangeColors = useAppSelector(selectChangeableTableIsAutochangeColorsCells)
   const onChangeIsChangeColorsAfterPress: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setAdditionalTableOptionsIsAutochangeColors(e.target.checked))
   }
   return <Switch checked={isAutochangeColors} onChange={onChangeIsChangeColorsAfterPress} />
}
