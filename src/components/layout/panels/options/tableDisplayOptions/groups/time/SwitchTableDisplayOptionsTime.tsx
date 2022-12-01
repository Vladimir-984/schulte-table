import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableDisplayIsShowTime } from 'store/selectors/tableOptions'
import { setDisplayTableOptionsIsShowTime } from 'store/asyncThunks/tableOptions'

export const SwitchTableDisplayOptionsTime: React.FC = () => {
   const dispatch = useAppDispatch()
   const isShowTime = useAppSelector(selectChangeableTableDisplayIsShowTime)
   const onChangeIsShowTime: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setDisplayTableOptionsIsShowTime(e.target.checked))
   }
   return <Switch checked={isShowTime} onChange={onChangeIsShowTime} />
}
