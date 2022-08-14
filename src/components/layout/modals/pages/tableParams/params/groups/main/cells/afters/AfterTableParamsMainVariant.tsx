import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableVariant } from 'store/selectors/tableParams'
import { TABLE_VARIANT } from 'lists'

export const AfterTableParamsMainVariant: React.FC = () => {
   const tableVariant = useAppSelector(selectChangeableTableVariant)
   return (
      <Title level='3' weight='2'>
         {TABLE_VARIANT[tableVariant]}
      </Title>
   )
}
