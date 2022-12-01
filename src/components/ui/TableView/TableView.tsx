import React from 'react'
import { classNames } from '@vkontakte/vkui'

import { IAdditionalTableOptions } from 'types/table'

import './TableView.css'
import { useAppSelector } from 'hooks/redux'
import { TableCell } from '../TableCell/TableCell'
// import { autoChangeColor } from 'store/slices/tableSlice'

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
   /* const dispatch = useAppDispatch()
   const timeoutRef = React.useRef<NodeJS.Timer>() */

   const tableSize = useAppSelector((state) => state.table.options.additionalOptions.size)

   const cells = useAppSelector((state) => state.table.active.displayedCells)

   const styles: React.CSSProperties = {
      gridTemplateColumns: `repeat(${tableSize}, 1fr)`,
      gridTemplateRows: `repeat(${tableSize}, 1fr)`,
   }

   /* const changeColor = () => {
      dispatch(autoChangeColor())
   }
   React.useEffect(() => {
      timeoutRef.current = setInterval(changeColor, 1000)

      return () => {
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
         }
      }
   }, []) */

   return (
      <div className='TableView__cells' style={styles}>
         {cells.map((cell) => (
            <TableCell key={cell.id} {...cell} />
         ))}
      </div>
   )
}
