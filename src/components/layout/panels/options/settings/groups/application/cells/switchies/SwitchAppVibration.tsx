import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectAppIsActiveVibration } from 'store/selectors/application'
import { setVibration } from 'store/slices/applicationSlice'

export const SwitchAppVibration: React.FC = () => {
   const dispatch = useAppDispatch()
   const isActiveVibration = useAppSelector(selectAppIsActiveVibration)

   const onChangeIsActiveVibration: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setVibration(e.target.checked))
   }
   return <Switch checked={isActiveVibration} onChange={onChangeIsActiveVibration} />
}
