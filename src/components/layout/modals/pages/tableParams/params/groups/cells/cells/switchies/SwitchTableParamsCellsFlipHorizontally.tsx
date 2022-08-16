import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsFlipHorizontally } from 'store/selectors/tableParams'
import { setTableParamsIsFlipHorizontally } from 'store/slices/tableParamsSlice'

export const SwitchTableParamsCellsFlipHorizontally: React.FC = () => {
   const dispatch = useAppDispatch()
   const isFlipHorizontally = useAppSelector(selectChangeableTableIsFlipHorizontally)
   const onChangeFlipHorizontally: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableParamsIsFlipHorizontally(e.target.checked))
   }
   return <Switch checked={isFlipHorizontally} onChange={onChangeFlipHorizontally} />
}
