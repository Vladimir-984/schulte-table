import React from 'react'
import { classNames } from '@vkontakte/vkui'
import { ISymbol } from 'types/table'

import './SymbolView.css'

<<<<<<< HEAD
interface SymbolViewProps extends Pick<ISymbol, 'value'>, Partial<Omit<ISymbol, 'value'>> {}
=======
interface SymbolViewProps extends ISymbol {}
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4

export const SymbolView: React.FC<SymbolViewProps> = ({
   value,
   disabled,
<<<<<<< HEAD
   isFlipHorizontally,
   isFlipVertically,
   color,
}) => {
   return (
      <div className={classNames('Symbol', disabled && 'Symbol--disabled')} style={{ color }}>
         <svg x={0} y={0} width='100%' height='100%' viewBox='0 0 50 50'>
            <text
               x='50%'
               y='50%'
               alignmentBaseline='central'
               dominantBaseline='central'
               fill='currentColor'
               className='Symbol__text'
            >
               {value}
            </text>
         </svg>
      </div>
   )
=======
   id,
   isFlipHorizontally,
   isFlipVertically,
}) => {
   return <div className={classNames('Symbol', disabled && 'Symbol--disabled')}>{value}</div>
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
}
