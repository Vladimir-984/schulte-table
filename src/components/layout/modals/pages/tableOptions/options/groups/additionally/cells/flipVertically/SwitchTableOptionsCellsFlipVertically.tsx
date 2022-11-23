import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableIsFlipVertically } from 'store/selectors/tableOptions'
import { setAdditionalTableOptionsIsFlipVertically } from 'store/slices/tableOptions'

export const SwitchTableOptionsCellsFlipVertically: React.FC = () => {
   const dispatch = useAppDispatch()
   const isFlipVertically = useAppSelector(selectChangeableTableIsFlipVertically)
   const onChangeFlipVertically: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setAdditionalTableOptionsIsFlipVertically(e.target.checked))
   }
   return <Switch checked={isFlipVertically} onChange={onChangeFlipVertically} />
}
