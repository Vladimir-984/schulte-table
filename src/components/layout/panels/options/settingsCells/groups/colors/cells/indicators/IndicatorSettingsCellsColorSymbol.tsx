import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { selectColorSymbol } from 'store/selectors/tableSettings'
import { TABLE_COLOR_TYPE } from 'lists'

export const IndicatorSettingsCellsColorSymbol: React.FC = () => {
   const colorSymbol = useAppSelector(selectColorSymbol)
   return <>{TABLE_COLOR_TYPE[colorSymbol]}</>
}
