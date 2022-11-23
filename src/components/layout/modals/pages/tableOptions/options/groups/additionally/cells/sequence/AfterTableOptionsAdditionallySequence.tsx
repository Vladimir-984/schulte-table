import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import {} from 'store/selectors/tableOptions'
import { TABLE_SEQUENCE } from 'lists'

export const AfterTableOptionsAdditionallySequence: React.FC<{ primary?: boolean }> = ({ primary }) => {
   return <></>
   /*   const tableSequence = useAppSelector(selectChangeableTableSequence)
   return (
      <Title level='3' weight='2' style={!primary ? { color: 'var(--vkui--color_text_tertiary)' } : undefined}>
         {TABLE_SEQUENCE[tableSequence]}
      </Title>
   ) */
}
