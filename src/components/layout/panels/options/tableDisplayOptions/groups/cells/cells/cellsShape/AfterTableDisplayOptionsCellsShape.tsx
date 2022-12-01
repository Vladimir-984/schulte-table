import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableDisplayCellsShapeTitle } from 'store/selectors/tableOptions'

export const AfterTableDisplayOptionsCellsShape: React.FC = () => {
   const cellsShapeTitle = useAppSelector(selectChangeableTableDisplayCellsShapeTitle)
   return (
      <Title level='3' weight='2'>
         {cellsShapeTitle}
      </Title>
   )
}
