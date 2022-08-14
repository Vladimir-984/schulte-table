import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsShuffleCells } from 'store/selectors/tableParams'
import { setTableIsShuffleCells } from 'store/slices/tableParamsSlice'

export const SwitchTableParamsCellsShuffle: React.FC = () => {
   const dispatch = useAppDispatch()

   const isShuffleCells = useAppSelector(selectChangeableTableIsShuffleCells)

   const onChangeTableShuffleCells: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableIsShuffleCells(e.target.checked))
   }
   return <Switch checked={isShuffleCells} onChange={onChangeTableShuffleCells} />
}
