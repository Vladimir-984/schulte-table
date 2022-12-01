import React from 'react'
import { useAppSelector } from 'hooks/redux'

import { secondShortFormatter } from 'utils/format'
import { selectChangeableTableHintsTimeout } from 'store/selectors/tableOptions'

export const IndicatorHintsOptionsTimeout: React.FC = () => {
   const hintsTimeout = useAppSelector(selectChangeableTableHintsTimeout)
   return <>{secondShortFormatter.format(hintsTimeout)}</>
}
