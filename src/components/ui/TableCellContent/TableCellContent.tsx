import React from 'react'
import { classNames } from '@vkontakte/vkui'
import { ICell } from 'types/table'
import { normalizeHEXColor } from 'utils/color'
import { SymbolView } from '../SymbolView/SymbolView'
import './TableCellContent.css'

interface TableCellContentProps extends Pick<ICell, 'symbol' | 'typeColor' | 'color' | 'animation'> {}

export const TableCellContent: React.FC<TableCellContentProps> = ({ symbol, typeColor, color, animation }) => {
   const resolvedBackgroundColor = typeColor === 'custom' ? normalizeHEXColor(color) : undefined

   return (
      <div
         style={{ backgroundColor: resolvedBackgroundColor }}
         className={classNames(
            'TableCellContent',
            typeColor && `TableCellContent--clr-${typeColor}`,
            animation && `TableCellContent--animation-${animation}`
         )}
      >
         <SymbolView {...symbol} />
      </div>
   )
}
