import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsColoredSymbols } from 'store/selectors/tableOptions'
import { setTableOptionsIsColoredSymbols } from 'store/slices/tableOptions'

export const SwitchTableOptionsIsColoredSymbols: React.FC = () => {
   const dispatch = useAppDispatch()
   const isColoredSymbols = useAppSelector(selectChangeableTableIsColoredSymbols)

   const onChangeIsColoredSymbols: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableOptionsIsColoredSymbols(e.target.checked))
   }
   return <Switch checked={isColoredSymbols} onChange={onChangeIsColoredSymbols} />
}
