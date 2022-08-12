import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectHintsIsActive } from 'store/selectors/tableSettings'
import { setHintsIsActive } from 'store/slices/tableSettingsSlice'

export const SwitchTableHintsActive: React.FC = () => {
   const dispatch = useAppDispatch()
   const hintsIsActive = useAppSelector(selectHintsIsActive)

   const onChangeHintsIsActive: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setHintsIsActive(e.target.checked))
   }
   return <Switch checked={hintsIsActive} onChange={onChangeHintsIsActive} />
}
