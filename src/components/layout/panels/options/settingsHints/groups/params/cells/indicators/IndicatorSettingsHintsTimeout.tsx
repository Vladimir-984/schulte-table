import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { selectHintsTimeout } from 'store/selectors/tableSettings'
import { secondShortFormatter } from 'utils/format'

export const IndicatorSettingsHintsTimeout: React.FC = () => {
   const hintsTimeout = useAppSelector(selectHintsTimeout)
   return <>{secondShortFormatter.format(hintsTimeout)}</>
}
