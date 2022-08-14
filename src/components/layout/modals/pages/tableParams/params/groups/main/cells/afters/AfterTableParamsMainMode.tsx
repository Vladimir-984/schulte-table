import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableMode } from 'store/selectors/tableParams'
import { TABLE_MODE } from 'lists'

export const AfterTableParamsMainMode: React.FC = () => {
   const tableMode = useAppSelector(selectChangeableTableMode)
   return (
      <Title level='3' weight='2'>
         {TABLE_MODE[tableMode]}
      </Title>
   )
}
