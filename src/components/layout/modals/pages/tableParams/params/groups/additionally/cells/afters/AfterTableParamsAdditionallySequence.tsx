import React from 'react'
import { Title } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableSequence } from 'store/selectors/tableParams'
import { TABLE_SEQUENCE } from 'lists'

export const AfterTableParamsAdditionallySequence: React.FC<{ primary?: boolean }> = ({ primary }) => {
   const tableSequence = useAppSelector(selectChangeableTableSequence)
   return (
      <Title level='3' weight='2' style={!primary ? { color: 'var(--vkui--color_text_tertiary)' } : undefined}>
         {TABLE_SEQUENCE[tableSequence]}
      </Title>
   )
}
