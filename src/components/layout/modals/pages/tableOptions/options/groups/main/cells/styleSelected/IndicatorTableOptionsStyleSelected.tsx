import React from 'react'
import { IndicatorTitle } from 'components/ui/IndicatorTitle/IndicatorTitle'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableStyleSelectedTitle } from 'store/selectors/tableOptions'

export const IndicatorTableOptionsStyleSelected: React.FC = () => {
   const styleSelectedTitle = useAppSelector(selectChangeableTableStyleSelectedTitle)
   return <IndicatorTitle>{styleSelectedTitle}</IndicatorTitle>
}
