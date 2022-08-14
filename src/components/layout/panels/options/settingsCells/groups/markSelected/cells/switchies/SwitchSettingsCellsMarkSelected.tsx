import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectIsMarkSelected } from 'store/selectors/tableSettings'
import { setMarkSelectedCells } from 'store/slices/tableSettingsSlice'

export const SwitchSettingsCellsMarkSelected: React.FC = () => {
   const dispatch = useAppDispatch()

   const isMarkSelected = useAppSelector(selectIsMarkSelected)

   const onChangeMarkSelected: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setMarkSelectedCells(e.target.checked))
   }
   return <Switch checked={isMarkSelected} onChange={onChangeMarkSelected} />
}
