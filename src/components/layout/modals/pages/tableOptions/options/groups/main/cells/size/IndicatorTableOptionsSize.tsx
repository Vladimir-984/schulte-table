import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableSizeTitle } from 'store/selectors/tableOptions'
import { IndicatorTitle } from 'components/ui/IndicatorTitle/IndicatorTitle'

export const IndicatorTableOptionsSize: React.FC = () => {
   const tableSizetitle = useAppSelector(selectChangeableTableSizeTitle)
   return <IndicatorTitle>{tableSizetitle}</IndicatorTitle>
}
