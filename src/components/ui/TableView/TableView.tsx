import React from 'react'
import { classNames } from '@vkontakte/vkui'

import { ITableParams, TableColor, TableVariant } from 'types/table'
import { TableCellView } from '../TableCellView/TableCellView'

import './TableView.css'
import { useAppSelector } from 'hooks/redux'

interface TableViewProps extends Partial<Pick<ITableParams, 'tableSize'>> {}

export const TableView: React.FC<TableViewProps> = ({}) => {
   const cells = useAppSelector((state) => state.table.active.cells)
   const tableSize = useAppSelector((state) => state.table.params.tableSize)
   return (
      <div className={classNames('TableView')}>
         <div className='TableView__in'>
            <div
               className='TableView__cells'
               style={{
                  gridTemplateColumns: `repeat(${tableSize}, 1fr)`,
                  gridTemplateRows: `repeat(${tableSize}, 1fr)`,
               }}
            >
               {cells.map((cell) => (
                  <TableCellView key={cell.id} {...cell} />
               ))}
            </div>
         </div>
      </div>
   )
}

interface ITableContext {
   variant: TableVariant
   size: number
   tableCellColor: TableColor
   tableSymbolColor: TableColor
   markSelectedCells: boolean
   showMistakes: boolean
}
const TableContext = React.createContext({})
const TableProvider: React.FC = ({ children }) => {
   const value = React.useMemo(() => {
      return {}
   }, [])
   return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}
/*
import React from 'react'
import { classNames } from '@vkontakte/vkui'

import './TableView.css'
import { TableCell, ICell, ISymbol, TableColor } from 'types/table'
import { TableCellView } from '../TableCellView/TableCellView'

interface TableViewProps {
   // extends ITable
}

const cells: ICell[] = []

for (let idx = 1; idx <= 49; idx++) {
   const symbol: ISymbol = {
      id: idx,
      disabled: false,
      value: `${idx}`,
   }
   const cell: ICell = {
      id: idx,
      symbol,
      sequenceValue: '',
      color: Math.random().toString(16).slice(-6),
      disabledTappable: false,
   }

   cells.push(cell)
}

export const TableView: React.FC<TableViewProps> = () => {
   return (
      <div className={classNames('TableView')}>
         <div className='TableView__in'>
            <div
               className='TableView__cells'
               style={{
                  gridTemplateColumns: `repeat(${7},1fr)`,
                  gridTemplateRows: `repeat(${7},1fr)`,
               }}
            >
               {cells.map((cell) => (
                  <TableCellView
                     key={`cell--${cell.id}`}
                     colorCell={TableColor.DEFAULT}
                     colorSymbol={TableColor.DEFAULT}
                     markSelectedCells={true}
                     showMistakes={true}
                     {...cell}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}
 */
