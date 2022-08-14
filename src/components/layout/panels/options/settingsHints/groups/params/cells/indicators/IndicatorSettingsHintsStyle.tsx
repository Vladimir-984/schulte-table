import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { HINTS_STYLE_TYPE } from 'lists'
import { selectHintsStyle } from 'store/selectors/tableSettings'

export const IndicatorSettingsHintsStyle: React.FC = () => {
   const hintsStyle = useAppSelector(selectHintsStyle)
   return <>{HINTS_STYLE_TYPE[hintsStyle]}</>
}
