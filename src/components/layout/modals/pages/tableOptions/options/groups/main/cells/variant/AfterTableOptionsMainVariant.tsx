import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableVariantTitle } from 'store/selectors/tableOptions'

export const AfterTableOptionsMainVariant: React.FC = () => {
   const tableVariant = useAppSelector(selectChangeableTableVariantTitle)
   return (
      <Title level='3' weight='2'>
         {tableVariant}
      </Title>
   )
}
