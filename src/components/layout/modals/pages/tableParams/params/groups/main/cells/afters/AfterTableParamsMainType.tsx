import React from 'react'
import { Title } from '@vkontakte/vkui'

import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableType } from 'store/selectors/tableParams'
import { TABLE_TYPE } from 'lists'

export const AfterTableParamsMainType: React.FC = () => {
   const tableType = useAppSelector(selectChangeableTableType)
   return (
      <Title level='3' weight='2'>
         {TABLE_TYPE[tableType]}
      </Title>
   )
}
