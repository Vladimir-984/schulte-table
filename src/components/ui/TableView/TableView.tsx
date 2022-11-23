import React from 'react'
import { classNames } from '@vkontakte/vkui'

import { IAdditionalTableOptions } from 'types/table'
import { TableCellView } from '../TableCellView/TableCellView'

import './TableView.css'
import { useAppSelector } from 'hooks/redux'

interface TableViewProps extends Partial<Pick<IAdditionalTableOptions, 'size'>> {}

export const TableView: React.FC<TableViewProps> = ({}) => {
   return (
      <div className={classNames('TableView')}>
         <div className='TableView__in'>
            <TableViewCells />
         </div>
      </div>
   )
}
const TableViewCells: React.FC = () => {
   const tableSize = useAppSelector((state) => state.table.options.size)

   const cells = useAppSelector((state) => state.table.active.displayedCells)
   const styles: React.CSSProperties = {
      gridTemplateColumns: `repeat(${tableSize}, 1fr)`,
      gridTemplateRows: `repeat(${tableSize}, 1fr)`,
   }
   return (
      <div className='TableView__cells' style={styles}>
         {cells.map((cell) => (
            <TableCellView key={cell.id} {...cell} />
         ))}
      </div>
   )
}
