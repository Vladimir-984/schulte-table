import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsFlipHorizontally } from 'store/selectors/tableOptions'
import { setAdditionalTableOptionsIsFlipHorizontally } from 'store/slices/tableOptions'

export const SwitchTableOptionsCellsFlipHorizontally: React.FC = () => {
   const dispatch = useAppDispatch()
   const isFlipHorizontally = useAppSelector(selectChangeableTableIsFlipHorizontally)
   const onChangeFlipHorizontally: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setAdditionalTableOptionsIsFlipHorizontally(e.target.checked))
   }
   return <Switch checked={isFlipHorizontally} onChange={onChangeFlipHorizontally} />
}
