import React from 'react'

import { TableCellTappable } from '../TableCellTappable/TableCellTappable'
import { TableCellContent } from '../TableCellContent/TableCellContent'

import { ICell } from 'types/table'

interface TableCellViewProps extends ICell {}

export const TableCellView: React.FC<TableCellViewProps> = ({
   id,
   color,
   typeColor,
   isTappableDisabled,
   tappableMode,
   animation,
   typeOutline,
   symbol,
}) => {
   return (
      <TableCellTappable
         id={id}
         typeOutline={typeOutline}
         isTappableDisabled={isTappableDisabled}
         tappableMode={tappableMode}
      >
         <TableCellContent
            color={color}
            typeColor={typeColor}
            animation={animation}
            symbol={symbol}
            // animation={sequenceValue === '5' ? 'wiggle' : undefined}
         />
      </TableCellTappable>
   )
}
