import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React from 'react'
import { selectChangeableTableIsChangeColorsAfterPress } from 'store/selectors/tableOptions'
import { setColoredTableOptionsIsChangeColorsAfterPress } from 'store/slices/tableOptions'

export const SwitchTableOptionsColoredChangeColorsAfterPress: React.FC = () => {
   const dispatch = useAppDispatch()
   const isChangeColorsAfterPress = useAppSelector(selectChangeableTableIsChangeColorsAfterPress)
   const onChangeIsChangeColorsAfterPress: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setColoredTableOptionsIsChangeColorsAfterPress(e.target.checked))
   }
   return <Switch checked={isChangeColorsAfterPress} onChange={onChangeIsChangeColorsAfterPress} />
}
