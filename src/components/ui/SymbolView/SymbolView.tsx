import React from 'react'
import { classNames } from '@vkontakte/vkui'
import { ISymbol } from 'types/table'
import { normalizeHEXColor } from 'utils/color'

import './SymbolView.css'

export type TypeSize = 's' | 'm' | 'l'

interface SymbolViewProps extends Pick<ISymbol, 'value'>, Partial<Omit<ISymbol, 'value'>> {
   textSize?: TypeSize
}

export const SymbolView: React.FC<SymbolViewProps> = ({
   value,
   disabled,
   textSize = 'm',
   typeColor = 'white',

   isFlipHorizontally,
   isFlipVertically,
   color,
}) => {
   const resolvedStyleColor = typeColor === 'custom' ? normalizeHEXColor(color) : undefined

   const resolvedTextFlip =
      isFlipHorizontally && isFlipVertically ? 'both' : isFlipHorizontally ? 'h' : isFlipVertically ? 'v' : undefined

   return (
      <div
         className={classNames('Symbol', disabled && 'Symbol--disabled', typeColor && `Symbol--clr-${typeColor}`)}
         style={{ color: resolvedStyleColor }}
      >
         <svg
            className='Symbol__svg'
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
                  'Symbol__text',
                  `Symbol__text--sz-${textSize}`,
                  resolvedTextFlip && `Symbol__text--flip-${resolvedTextFlip}`
               )}
            >
               {value}
            </text>
         </svg>
      </div>
   )
}
