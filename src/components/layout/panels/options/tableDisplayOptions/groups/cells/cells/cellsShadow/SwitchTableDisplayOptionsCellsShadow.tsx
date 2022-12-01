import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableDisplayCellsIsEnabledShadow } from 'store/selectors/tableOptions'
import { setDisplayTableOptionsIsEnabledShadow } from 'store/asyncThunks/tableOptions'

export const SwitchTableDisplayOptionsCellsShadow: React.FC = () => {
   const dispatch = useAppDispatch()
   const isEnabledShadow = useAppSelector(selectChangeableTableDisplayCellsIsEnabledShadow)
   const onChangeIsEnabledShadow: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setDisplayTableOptionsIsEnabledShadow(e.target.checked))
   }
   return <Switch checked={isEnabledShadow} onChange={onChangeIsEnabledShadow} />
}
