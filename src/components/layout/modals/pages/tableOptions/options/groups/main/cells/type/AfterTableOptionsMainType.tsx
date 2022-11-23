import React from 'react'
import { Title } from '@vkontakte/vkui'

import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableTypeTitle } from 'store/selectors/tableOptions'

export const AfterTableOptionsMainType: React.FC = () => {
   const tableType = useAppSelector(selectChangeableTableTypeTitle)
   return (
      <Title level='3' weight='2'>
         {tableType}
      </Title>
   )
}
