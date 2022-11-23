import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { selectChangeableTableIsColoredCells } from 'store/selectors/tableOptions'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setAdditionalTableOptionsIsColoredCells } from 'store/slices/tableOptions'

export const SwitchTableOptionsAdditionallyColoredCells: React.FC = () => {
   const dispatch = useAppDispatch()
   const isColoredCells = useAppSelector(selectChangeableTableIsColoredCells)
   const onChangeIsColoredCells: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setAdditionalTableOptionsIsColoredCells(e.target.checked))
   }
   return <Switch checked={isColoredCells} onChange={onChangeIsColoredCells} />
}
