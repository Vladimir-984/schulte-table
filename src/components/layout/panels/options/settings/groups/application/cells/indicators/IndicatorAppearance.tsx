import React from 'react'
import { useAppSelector } from 'hooks/redux'

import { selectAppAppearanceType } from 'store/selectors/application'
import { IndicatorTitle } from 'components/ui/IndicatorTitle/IndicatorTitle'

export const IndicatorAppearance: React.FC = () => {
   const appearanceType = useAppSelector(selectAppAppearanceType)
   return <IndicatorTitle>{appearanceType}</IndicatorTitle>
}
