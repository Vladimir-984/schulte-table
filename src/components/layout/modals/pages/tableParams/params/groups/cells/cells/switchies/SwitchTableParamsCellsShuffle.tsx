import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsShuffleCells } from 'store/selectors/tableParams'
import { setTableParamsIsShuffleCells } from 'store/slices/tableParamsSlice'

export const SwitchTableParamsCellsShuffle: React.FC = () => {
   const dispatch = useAppDispatch()

   const isShuffleCells = useAppSelector(selectChangeableTableIsShuffleCells)

   const onChangeTableShuffleCells: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableParamsIsShuffleCells(e.target.checked))
   }
   return <Switch checked={isShuffleCells} onChange={onChangeTableShuffleCells} />
}
