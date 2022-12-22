import React from 'react'
import { classNames } from '@vkontakte/vkui'
import { ICell } from 'types/table'
import { TableCellBackground } from '../TableCellBackground/TableCellBackground'
import { TableCellTappable } from '../TableCellTappable/TableCellTappable'

import './TableCell.css'
import { TableCellSymbol } from '../TableCellSymbol/TableCellSymbol'

export const TableCell: React.FC<ICell> = (cell) => {
   return (
      <div
         className={classNames(
            'TableCell'
            // cell.isOutline && 'TableCell--outline',
            // cell.isRounded && 'TableCell--rounded'
         )}
      >
         <TableCellTappable id={cell.id} tappable={cell?.tappable}>
            <TableCellBackground background={cell.background}>
               {cell.visibility !== 'hidden' && <TableCellSymbol {...cell.symbol} />}
            </TableCellBackground>
         </TableCellTappable>
      </div>
   )
}
