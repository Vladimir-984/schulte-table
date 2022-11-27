import React from 'react'

import { TableCellTappable } from '../TableCellTappable/TableCellTappable'
// import { TableCellContent } from '../TableCellBackground/TableCellBackground'

import { ICell } from 'types/table'

interface TableCellViewProps extends ICell {}

export const TableCellView: React.FC<TableCellViewProps> = ({
   id,

   // isTappableDisabled,
   // tappableMode,
   // animation,
   // outline,
   // symbol,
}) => {
   return null
   // <TableCellTappable id={id} outline={outline} isTappableDisabled={isTappableDisabled} tappableMode={tappableMode}>
   //    <TableCellContent
   //       // color={color}
   //       // colorMode={colorMode}
   //       animation={animation}
   //       symbol={symbol}
   //       // animation={sequenceValue === '5' ? 'wiggle' : undefined}
   //    />
   // </TableCellTappable>
}
