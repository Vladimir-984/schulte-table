import React from 'react'
import { useAppSelector } from 'hooks/redux'
import { selectColorCell } from 'store/selectors/tableSettings'
import { TABLE_COLOR_TYPE } from 'lists'

export const IndicatorSettingsCellsColorCell: React.FC = () => {
   const colorCell = useAppSelector(selectColorCell)
   return <>{TABLE_COLOR_TYPE[colorCell]}</>
}
