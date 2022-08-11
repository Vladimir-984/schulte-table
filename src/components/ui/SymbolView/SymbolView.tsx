import React from 'react'
import { classNames } from '@vkontakte/vkui'
import { ISymbol } from 'types/table'

import './SymbolView.css'

export type TypeSize = 's' | 'm' | 'l'
interface SymbolViewProps extends Pick<ISymbol, 'value'>, Partial<Omit<ISymbol, 'value'>> {
   size?: TypeSize
}

export const SymbolView: React.FC<SymbolViewProps> = ({
   value,
   disabled,
   size = 'm',
   isFlipHorizontally,
   isFlipVertically,
   color,
}) => {
   return (
      <div className={classNames('Symbol', disabled && 'Symbol--disabled')} style={{ color }}>
         <svg
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
               className={classNames('Symbol__text', `Symbol__text--sz-${size}`)}
            >
               {value}
            </text>
         </svg>
      </div>
   )
}
