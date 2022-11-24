import React from 'react'
import { classNames } from '@vkontakte/vkui'
import { ICell } from 'types/table'
import { normalizeHEXColor } from 'utils/color'
import { SymbolView } from '../SymbolView/SymbolView'
import './TableCellContent.css'

interface TableCellContentProps extends Pick<ICell, 'symbol' | 'colorMode' | 'color' | 'animation'> {}

export const TableCellContent: React.FC<TableCellContentProps> = ({ symbol, colorMode, color, animation }) => {
   const resolvedBackgroundColor = colorMode === 'custom' ? normalizeHEXColor(color) : undefined

   return (
      <div
         style={{ backgroundColor: resolvedBackgroundColor }}
         className={classNames(
            'TableCellContent',
            colorMode && `TableCellContent--clr-${colorMode}`,
            animation && `TableCellContent--animation-${animation}`
         )}
      >
         {!!symbol && <SymbolView {...symbol} />}
      </div>
   )
}
