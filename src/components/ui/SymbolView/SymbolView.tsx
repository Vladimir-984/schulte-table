import React from 'react'
import { classNames, useAppearance } from '@vkontakte/vkui'
import { ISymbol, TypeRedBlack } from 'types/table'

import './SymbolView.css'
import { normalizeHEXColor } from 'utils/color'

export type TypeSize = 's' | 'm' | 'l'
interface SymbolViewProps extends Pick<ISymbol, 'value'>, Partial<Omit<ISymbol, 'value'>> {
   textSize?: TypeSize
   /**
    * `primary` - цвет зависит от темы;
    * `custom` - устанавлиет цвет из `color`;
    * `white` - для красно-чёрной таблицы;
    */
   symbolColor?: //TypeRedBlack |
   'primary' | 'white' | 'custom'
}

export const SymbolView: React.FC<SymbolViewProps> = ({
   value,
   disabled,
   textSize = 'm',
   animation,
   symbolColor = 'primary',

   isFlipHorizontally,
   isFlipVertically,
   color,
}) => {
   const appearance = useAppearance()
   const resolvedStyleColor = symbolColor === 'custom' ? normalizeHEXColor(color) : undefined

   const resolvedTextFlip =
      isFlipHorizontally && isFlipVertically ? 'both' : isFlipHorizontally ? 'h' : isFlipVertically ? 'v' : undefined

   return (
      <div
         className={classNames(
            'Symbol',
            `Symbol--appearance-${appearance}`,
            disabled && 'Symbol--disabled',
            symbolColor && `Symbol--clr-${symbolColor}`
         )}
         style={{ color: resolvedStyleColor }}
      >
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
