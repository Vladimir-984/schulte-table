import React from 'react'
import { Avatar, Header } from '@vkontakte/vkui'
import { TableTime } from '../TableTime/TableTime'
import { TableHeaderAside } from '../TableHeaderAside/TableHeaderAside'

import './TableHeader.css'
import { useAppSelector } from 'hooks/redux'
import { selectActiveTableCurrentSequenceCell, selectActiveTableIsShowTimeTable } from 'store/selectors/activeTable'
import { TableCellBackground } from '../TableCellBackground/TableCellBackground'
import { TableCellSymbol } from '../TableCellSymbol/TableCellSymbol'
import { TableCell } from '../TableCell/TableCell'
import { ICell } from 'types/table'

export const TableHeader: React.FC = () => {
   const isShowTableTime = useAppSelector(selectActiveTableIsShowTimeTable)
   return (
      <div className='TableHeader'>
         <div className='TableHeader__item TableHeader__item--before'>{isShowTableTime && <TableTime />}</div>
         <div className='TableHeader__item'>
            <TableCurrentCell />
         </div>
         <div className='TableHeader__item TableHeader__item--after'>
            <TableHeaderAside />
         </div>
      </div>
   )
}

export const TableCurrentCell: React.FC = () => {
   const currentSequenceCell = useAppSelector(selectActiveTableCurrentSequenceCell)
   if (!currentSequenceCell) return null

   const cellProps: ICell = {
      ...currentSequenceCell,
      transforms: {},
      tappable: { tappableMode: 'opacity', isTappableDisabled: true },
   }
   return (
      <div style={{ width: 48, height: 48 }}>
         {!!currentSequenceCell && !!currentSequenceCell.symbol && (
            <TableCell {...cellProps} />
            // <TableCellBackground background={{ ...currentSequenceCell.background, backgroundShadow: true }}>
            //    <TableCellSymbol {...currentSequenceCell.symbol} />
            // </TableCellBackground>
         )}
      </div>
   )
}
