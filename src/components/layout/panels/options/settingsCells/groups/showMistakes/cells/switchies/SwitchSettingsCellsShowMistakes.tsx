import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectIsShowMistakes } from 'store/selectors/tableSettings'
import { setShowMistakes } from 'store/slices/tableSettingsSlice'

export const SwitchSettingsCellsShowMistakes: React.FC = () => {
   const dispatch = useAppDispatch()

   const isShowMistakes = useAppSelector(selectIsShowMistakes)

   const onChangeShowMistakes: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setShowMistakes(e.target.checked))
   }

   return <Switch checked={isShowMistakes} onChange={onChangeShowMistakes} />
}
