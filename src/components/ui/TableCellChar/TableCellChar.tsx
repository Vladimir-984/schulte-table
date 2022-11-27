import React from 'react'
import { classNames } from '@vkontakte/vkui'

import './TableCellChar.css'
import { IChar } from 'types/table'
import { normalizeHEXColor } from 'utils/color'

export type TypeSize = 's' | 'm' | 'l'

interface TableCellCharProps extends IChar {
   textSize?: TypeSize
}

export const TableCellChar: React.FC<TableCellCharProps> = ({
   value,
   color,
   colorMode,
   isFlipHorizontally,
   isFlipVertically,
   textSize = 'm',
}) => {
   const resolvedStyleColor = colorMode === 'custom' ? normalizeHEXColor(color) : undefined

   const resolvedTextFlip =
      isFlipHorizontally && isFlipVertically ? 'both' : isFlipHorizontally ? 'h' : isFlipVertically ? 'v' : undefined

   return (
      <div
         className={classNames('TableCellChar', colorMode && `TableCellChar--clr-md-${colorMode}`)}
         style={{ color: resolvedStyleColor }}
      >
         <svg
            className='TableCellChar__svg'
            x={0}
            y={0}
            width='100%'
            height='100%'
            viewBox='0 0 50 50'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
         >
            <text
               x='50%'
               y='50%'
               textAnchor='middle'
               dominantBaseline='central'
               fill='currentColor'
               className={classNames(
                  'TableCellChar__text',
                  `TableCellChar__text--sz-${textSize}`,
                  resolvedTextFlip && `TableCellChar__text--flip-${resolvedTextFlip}`
               )}
            >
               {value}
            </text>
         </svg>
      </div>
   )
}
