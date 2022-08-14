import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableSize } from 'store/selectors/tableParams'
import { getSizeWithX } from 'table/generator'

export const AfterTableParamsAdditionallySize: React.FC = () => {
   const tableSize = useAppSelector(selectChangeableTableSize)
   return (
      <Title level='3' weight='2'>
         {getSizeWithX(tableSize)}
      </Title>
   )
}
