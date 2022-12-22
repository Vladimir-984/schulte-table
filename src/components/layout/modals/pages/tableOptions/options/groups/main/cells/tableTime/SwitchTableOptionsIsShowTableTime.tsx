import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableDisplayIsShowTimeTable } from 'store/selectors/tableOptions'
import { setTableOptionsIsShowTableTime } from 'store/slices/tableOptions'

export const SwitchTableOptionsIsShowTableTime: React.FC = () => {
   const dispatch = useAppDispatch()
   const isShowtableTime = useAppSelector(selectChangeableTableDisplayIsShowTimeTable)

   const onChangeIsShowTableTime: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableOptionsIsShowTableTime(e.target.checked))
   }

   return <Switch checked={isShowtableTime} onChange={onChangeIsShowTableTime} />
}
