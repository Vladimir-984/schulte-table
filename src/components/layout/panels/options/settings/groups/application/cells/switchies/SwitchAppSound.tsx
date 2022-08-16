import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectAppIsActiveSound } from 'store/selectors/application'
import { setSound } from 'store/slices/applicationSlice'

export const SwitchAppSound: React.FC = () => {
   const dispatch = useAppDispatch()
   const isActiveSound = useAppSelector(selectAppIsActiveSound)

   const onChangeIsActiveSound: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setSound(e.target.checked))
   }
   return <Switch checked={isActiveSound} onChange={onChangeIsActiveSound} />
}
