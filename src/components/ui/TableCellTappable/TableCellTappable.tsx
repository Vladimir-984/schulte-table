import React from 'react'
import { classNames, Tappable } from '@vkontakte/vkui'
import { useAppDispatch } from 'hooks/redux'
import { clickCell } from 'store/slices/tableSlice'
import { ICell } from 'types/table'

import './TableCellTappable.css'

interface TableCellTappableProps extends Pick<ICell, 'id' | 'tappable'> {}

export const TableCellTappable: React.FC<TableCellTappableProps> = ({ id, tappable, children }) => {
   // const appearance = useAppearance()
   const dispatch = useAppDispatch()

   const onClickCell = () => {
      dispatch(clickCell(id))
   }
   return (
      <Tappable
         onClick={onClickCell}
         activeMode={tappable?.tappableMode}
         hoverMode={tappable?.tappableMode}
         hasHover
         hasActive={false}
         activeEffectDelay={100}
         disabled={tappable?.isTappableDisabled}
         className={classNames(
            'TableCellTappable',
            tappable?.tappableMode && `Tappable--active-${tappable.tappableMode}`
         )}
      >
         {children}
      </Tappable>
   )
}
