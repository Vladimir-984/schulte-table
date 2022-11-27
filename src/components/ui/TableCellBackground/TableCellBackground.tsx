import React from 'react'
import { classNames } from '@vkontakte/vkui'
import { ICell } from 'types/table'
import { normalizeHEXColor } from 'utils/color'

import './TableCellBackground.css'

interface TableCellBackgroundProps extends Pick<ICell, 'background' | 'animation'> {}

export const TableCellBackground: React.FC<TableCellBackgroundProps> = ({ background, animation, children }) => {
   const resolvedBackgroundColor =
      background?.backgroundColorMode === 'custom' ? normalizeHEXColor(background?.backgroundColor) : undefined

   return (
      <div
         style={{ backgroundColor: resolvedBackgroundColor }}
         className={classNames(
            'TableCellBackground',
            background?.backgroundColorMode && `TableCellBackground--bg-clr-md-${background.backgroundColorMode}`,
            background?.backgroundShadow && 'TableCellBackground--shadow',
            animation && `TableCellBackground--animation-${animation}`
         )}
      >
         {children}
      </div>
   )
}
