import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setAdditionalTableOptionsIsColoredSymbols } from 'store/slices/tableOptions'
import { selectChangeableTableIsColoredSymbols } from 'store/selectors/tableOptions'

export const SwitchTableOptionsAdditionallyColoredSymbols: React.FC = () => {
   const dispatch = useAppDispatch()
   const isColoredSymbols = useAppSelector(selectChangeableTableIsColoredSymbols)
   const onChangeIsColoredSymbols: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setAdditionalTableOptionsIsColoredSymbols(e.target.checked))
   }
   return <Switch checked={isColoredSymbols} onChange={onChangeIsColoredSymbols} />
}
