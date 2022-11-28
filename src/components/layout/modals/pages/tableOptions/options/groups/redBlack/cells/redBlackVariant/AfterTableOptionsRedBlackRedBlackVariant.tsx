import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableRedBlackVariantTitle } from 'store/selectors/tableOptions'

export const AfterTableOptionsRedBlackRedBlackVariant: React.FC = () => {
   const redBlackVariantTitle = useAppSelector(selectChangeableTableRedBlackVariantTitle)
   return (
      <Title level='3' weight='2'>
         {redBlackVariantTitle}
      </Title>
   )
}
