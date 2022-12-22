import React from 'react'
import { classNames } from '@vkontakte/vkui'

import './TableCellSymbol.css'
import { ISymbol } from 'types/table'

export type TypeSize = 's' | 'm' | 'l'

interface TableCellSymbolProps extends ISymbol {
   textSize?: TypeSize
}

export const TableCellSymbol: React.FC<TableCellSymbolProps> = ({ value, colorMode, color, textSize = 'm' }) => {
   return (
      <div className={classNames('TableCellSymbol', colorMode && `TableCellSymbol--clr-md-${colorMode}`)}>
         <svg
            className='TableCellSymbol__svg'
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
               className={classNames('TableCellSymbol__text', `TableCellSymbol__text--sz-${textSize}`)}
            >
               {value}
            </text>
         </svg>
      </div>
   )
}
