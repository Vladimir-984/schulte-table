import React from 'react'
import { IndicatorTitle } from 'components/ui/IndicatorTitle/IndicatorTitle'
import { useAppSelector } from 'hooks/redux'

import { selectChangeableTableDirectionSequence } from 'store/selectors/tableOptions'

export const IndicatorTableOptionsSequence: React.FC = () => {
   const directionSequence = useAppSelector(selectChangeableTableDirectionSequence)

   return <IndicatorTitle>{directionSequence.title}</IndicatorTitle>
}
