import React from 'react'
import { Header } from '@vkontakte/vkui'
import { TableTime } from '../TableTime/TableTime'
import { TableHeaderAside } from '../TableHeaderAside/TableHeaderAside'

import './TableHeader.css'

export const TableHeader: React.FC = () => {
   return (
      <Header aside={<TableHeaderAside />} className='TableHeader'>
         <TableTime />
      </Header>
   )
}
