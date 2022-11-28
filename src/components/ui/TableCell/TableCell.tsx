import React from 'react'
import { classNames, useAppearance } from '@vkontakte/vkui'
import { ICell } from 'types/table'
import { TableCellBackground } from '../TableCellBackground/TableCellBackground'
import { TableCellTappable } from '../TableCellTappable/TableCellTappable'

import './TableCell.css'
import { TableCellChar } from '../TableCellChar/TableCellChar'

export const TableCell: React.FC<ICell> = (cell) => {
   const resolvedBorderRadius = cell.borderRadius
   const shape = cell.shape
   const appearance = useAppearance()
   return (
      <div
         style={{ borderRadius: resolvedBorderRadius }}
         className={classNames(
            'TableCell',
            cell.outline && `TableCell--outline TableCell--appearance-${appearance}`,
            shape && `TableCell--shape-${shape}`
         )}
      >
         <TableCellTappable id={cell.id} tappable={cell?.tappable}>
            <TableCellBackground background={cell.background}>
               {!!cell.char && <TableCellChar {...cell.char} />}
            </TableCellBackground>
         </TableCellTappable>
      </div>
   )
}
