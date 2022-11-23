import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableModeTitle } from 'store/selectors/tableOptions'

export const AfterTableOptionsMainMode: React.FC = () => {
   const tableMode = useAppSelector(selectChangeableTableModeTitle)
   return (
      <Title level='3' weight='2'>
         {tableMode}
      </Title>
   )
}
