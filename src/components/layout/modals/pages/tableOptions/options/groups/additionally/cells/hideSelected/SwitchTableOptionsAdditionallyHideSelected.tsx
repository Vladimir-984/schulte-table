import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsHideSelected } from 'store/selectors/tableOptions'
import { setAdditionalTableOptionsIsHideSelected } from 'store/slices/tableOptions'

export const SwitchTableOptionsAdditionallyHideSelected: React.FC = () => {
   const dispatch = useAppDispatch()
   const isHideSelected = useAppSelector(selectChangeableTableIsHideSelected)

   const onChangeHideSelected: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setAdditionalTableOptionsIsHideSelected(e.target.checked))
   }
   return <Switch checked={isHideSelected} onChange={onChangeHideSelected} />
}
