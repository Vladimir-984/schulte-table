import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableColorVariantTitle } from 'store/selectors/tableOptions'

export const AfterTableOptionsColoredColorVariant: React.FC = () => {
   const colorVariantTitle = useAppSelector(selectChangeableTableColorVariantTitle)
   return (
      <Title level='3' weight='2'>
         {colorVariantTitle}
      </Title>
   )
}
