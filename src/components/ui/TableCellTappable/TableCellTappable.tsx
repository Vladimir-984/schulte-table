import React from 'react'
import { classNames, Tappable } from '@vkontakte/vkui'
import { useAppDispatch } from 'hooks/redux'
import { clickCell } from 'store/slices/tableSlice'
import { ICell } from 'types/table'

import './TableCellTappable.css'

interface TableCellTappableProps extends Pick<ICell, 'id' | 'isTappableDisabled' | 'tappableMode' | 'typeOutline'> {}

export const TableCellTappable: React.FC<TableCellTappableProps> = ({
   id,
   isTappableDisabled,
   tappableMode,
   children,
   typeOutline,
}) => {
   // const appearance = useAppearance()
   const dispatch = useAppDispatch()

   const onClickCell = () => {
      dispatch(clickCell(id))
   }
   return (
      <Tappable
         onClick={onClickCell}
         activeMode={tappableMode}
         hoverMode={tappableMode}
         activeEffectDelay={200}
         disabled={isTappableDisabled}
         className={classNames(
            'TableCellTappable',
            // `TableCellTappable--appearance-${appearance}`,
            tappableMode && `Tappable--active-${tappableMode}`,
            // 'TableCellTappable--outline'
            typeOutline && `TableCellTappable--outline TableCellTappable--outline-${typeOutline}`
         )}
      >
         {children}
      </Tappable>
   )
}
