import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableHintsIsEnabled } from 'store/selectors/tableOptions'
import { setHintsTableOptionsIsEnabled } from 'store/asyncThunks/tableOptions'

export const SwitchHintsOptionsEnabled: React.FC = () => {
   const dispatch = useAppDispatch()
   const hintsIsEnabled = useAppSelector(selectChangeableTableHintsIsEnabled)

   const onChangeHintsIsEnabled: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setHintsTableOptionsIsEnabled(e.target.checked))
   }
   return <Switch checked={hintsIsEnabled} onChange={onChangeHintsIsEnabled} />
}
