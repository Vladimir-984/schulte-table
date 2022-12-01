import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableHintsStyleTitle } from 'store/selectors/tableOptions'

export const IndicatorHintsOptionsStyle: React.FC = () => {
   const hintsStyleTitle = useAppSelector(selectChangeableTableHintsStyleTitle)
   return <>{hintsStyleTitle}</>
}
