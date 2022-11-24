import React from 'react'

import { TableCellTappable } from '../TableCellTappable/TableCellTappable'
import { TableCellContent } from '../TableCellContent/TableCellContent'

import { ICell } from 'types/table'

interface TableCellViewProps extends ICell {}

export const TableCellView: React.FC<TableCellViewProps> = ({
   id,
   color,
   colorMode,
   isTappableDisabled,
   tappableMode,
   animation,
   outline,
   symbol,
}) => {
   return (
      <TableCellTappable id={id} outline={outline} isTappableDisabled={isTappableDisabled} tappableMode={tappableMode}>
         <TableCellContent
            color={color}
            colorMode={colorMode}
            animation={animation}
            symbol={symbol}
            // animation={sequenceValue === '5' ? 'wiggle' : undefined}
         />
      </TableCellTappable>
   )
}
