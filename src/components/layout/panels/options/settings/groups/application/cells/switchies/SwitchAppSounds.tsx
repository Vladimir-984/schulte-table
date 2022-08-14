import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectAppIsActiveSounds } from 'store/selectors/application'
import { setSounds } from 'store/slices/applicationSlice'

export const SwitchAppSounds: React.FC = () => {
   const dispatch = useAppDispatch()
   const isActiveSounds = useAppSelector(selectAppIsActiveSounds)

   const onChangeIsActiveSounds: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setSounds(e.target.checked))
   }
   return <Switch checked={isActiveSounds} onChange={onChangeIsActiveSounds} />
}
