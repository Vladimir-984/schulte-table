import React from 'react'
import { classNames, Tappable } from '@vkontakte/vkui'
import { ICell } from 'types/table'
import { SymbolView } from '../SymbolView/SymbolView'

import './TableCellView.css'

interface TableCellViewProps extends ICell {
   onClick?: () => void
}

export const TableCellView: React.FC<TableCellViewProps> = ({
   id,
   color,
   disabledTappable,
   effect,
   symbol,

   onClick,
}) => {
   return (
      <Tappable
         onClick={onClick}
         activeMode='opacity'
         hoverMode='opacity'
         activeEffectDelay={200}
         disabled={disabledTappable}
         className={classNames('TableCell', 'TableCell--tappable')}
      >
         <div
            style={{ backgroundColor: `#${color}` }}
            className={classNames('TableCell__content', effect && `TableCell__content--effect-${effect}`)}
         >
            <SymbolView {...symbol} />
         </div>
      </Tappable>
   )
}
