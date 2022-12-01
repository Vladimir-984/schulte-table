import React from 'react'
import { List, Separator, SimpleCell } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableDisplayCellsShape, selectDataTableCellsShapes } from 'store/selectors/tableOptions'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { setDisplayTableOptionsCellsShape } from 'store/asyncThunks/tableOptions'
import { ITableCellShape } from 'types/table'
import { isAddSeparator } from 'utils/list'

export const ListTableDisplayOptionsCellsShape: React.FC = () => {
   const dispatch = useAppDispatch()
   const dataCellsShapes = useAppSelector(selectDataTableCellsShapes)
   const cellsShape = useAppSelector(selectChangeableTableDisplayCellsShape)

   const onClickCellsShape = (_cellsShape: ITableCellShape) => () => {
      dispatch(setDisplayTableOptionsCellsShape(_cellsShape))
   }
   return (
      <List>
         {dataCellsShapes.map((cellsShapeItem, idx, items) => (
            <React.Fragment key={cellsShapeItem.id}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={cellsShape.id === cellsShapeItem.id && <Icon28DoneOutline />}
                  onClick={onClickCellsShape(cellsShapeItem)}
               >
                  {cellsShapeItem.title}
               </SimpleCell>
               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </List>
   )
}
