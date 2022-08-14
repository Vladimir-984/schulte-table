import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { APPEARANCE_TYPE } from 'lists'
import { selectAppAppearanceType } from 'store/selectors/application'

export const IndicatorAppearance: React.FC = () => {
   const appearanceType = useAppSelector(selectAppAppearanceType)
   return <>{APPEARANCE_TYPE[appearanceType]}</>
}
