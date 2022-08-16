import React from 'react'
import { classNames, Tappable } from '@vkontakte/vkui'
import { ICell, TypeRedBlack } from 'types/table'
import { SymbolView } from '../SymbolView/SymbolView'

import './TableCellView.css'
import { normalizeHEXColor } from 'utils/color'
import { useAppDispatch } from 'hooks/redux'
import { clickCell } from 'store/slices/tableSlice'

interface TableCellViewProps extends ICell {
   // onClick?: () => void
   borderCell?: 'primary' | 'secondary'
}

export const TableCellView: React.FC<TableCellViewProps> = ({
   id,
   color,
   disabledTappable,
   sequenceValue,
   borderCell = 'primary',
   animation,
   symbol,
   // onClick,
}) => {
   const dispatch = useAppDispatch()
   const onClickCell = () => {
      dispatch(clickCell(sequenceValue))
   }
   // const redOrBlack: TypeRedBlack = Math.random() - 0.5 > 0 ? 'red' : 'black'
   const resolvedBackgroundColor = normalizeHEXColor(color)

   const activeMode = 'opacity' //background
   const hoverMode = 'opacity' //background

   return (
      <Tappable
         onClick={onClickCell}
         activeMode={activeMode}
         hoverMode={hoverMode}
         activeEffectDelay={200}
         disabled={disabledTappable}
         className={classNames(
            'TableCell',
            'Tappable--active-opacity',
            borderCell && `TableCell--border-${borderCell}`
         )}
      >
         <div
            style={{ backgroundColor: resolvedBackgroundColor }}
            className={classNames(
               'TableCell__content',
               // redOrBlack && `TableCell__content--type-${redOrBlack}`,
               animation && `TableCell__content--animation-${animation}`
            )}
         >
            <SymbolView {...symbol} symbolColor='primary' />
         </div>
      </Tappable>
   )
}
