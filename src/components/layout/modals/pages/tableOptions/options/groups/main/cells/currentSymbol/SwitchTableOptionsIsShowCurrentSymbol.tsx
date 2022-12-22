import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import {
   selectChangeableTableIsShowCurrentSymbol,
   selectIsDisabledChangeShowCurrentSymbol,
} from 'store/selectors/tableOptions'
import { setTableOptionsIsShowCurrentSymbol } from 'store/slices/tableOptions'

export const SwitchTableOptionsIsShowCurrentSymbol: React.FC = () => {
   const dispatch = useAppDispatch()
   const isShowCurrentSymbol = useAppSelector(selectChangeableTableIsShowCurrentSymbol)
   const isDisabledChangeShowCurrentSymbol = useAppSelector(selectIsDisabledChangeShowCurrentSymbol)

   const onChangeIsShowCurrentSymbol: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableOptionsIsShowCurrentSymbol(e.target.checked))
   }

   return (
      <Switch
         disabled={isDisabledChangeShowCurrentSymbol}
         checked={isShowCurrentSymbol}
         onChange={onChangeIsShowCurrentSymbol}
      />
   )
}
