import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectIsEnabledHints } from 'store/selectors/tableSettings'
import { setEnabledHints } from 'store/slices/tableSettingsSlice'

export const SwitchSettingsHintsEnabled: React.FC = () => {
   const dispatch = useAppDispatch()
   const hintsIsActive = useAppSelector(selectIsEnabledHints)

   const onChangeHintsIsActive: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setEnabledHints(e.target.checked))
   }
   return <Switch checked={hintsIsActive} onChange={onChangeHintsIsActive} />
}
