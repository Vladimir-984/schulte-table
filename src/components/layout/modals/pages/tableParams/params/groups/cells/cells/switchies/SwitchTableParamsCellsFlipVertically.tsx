import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsFlipVertically } from 'store/selectors/tableParams'
import { setTableParamsIsFlipVertically } from 'store/slices/tableParamsSlice'

export const SwitchTableParamsCellsFlipVertically: React.FC = () => {
   const dispatch = useAppDispatch()
   const isFlipVertically = useAppSelector(selectChangeableTableIsFlipVertically)
   const onChangeFlipVertically: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableParamsIsFlipVertically(e.target.checked))
   }
   return <Switch checked={isFlipVertically} onChange={onChangeFlipVertically} />
}
