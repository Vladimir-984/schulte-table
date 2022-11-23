import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsShuffleCells } from 'store/selectors/tableOptions'
import { setAdditionalTableOptionsIsShuffleCellsAfterPress } from 'store/slices/tableOptions'

export const SwitchTableOptionsCellsShuffle: React.FC = () => {
   const dispatch = useAppDispatch()

   const isShuffleCells = useAppSelector(selectChangeableTableIsShuffleCells)

   const onChangeTableShuffleCells: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setAdditionalTableOptionsIsShuffleCellsAfterPress(e.target.checked))
   }
   return <Switch checked={isShuffleCells} onChange={onChangeTableShuffleCells} />
}
