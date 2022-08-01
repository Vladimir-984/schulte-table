import React from 'react'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Group, List, Separator, SimpleCell, SizeType, Title } from '@vkontakte/vkui'
import { Dropdown } from '@vkontakte/vkui/unstable'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { TableCell } from 'types/table'

export const TABLE_TYPE_CELLS = {
   [TableCell.RECT]: 'Квадратные',
   [TableCell.ROUND]: 'Круглые',
}

export const SelectTypeCell: React.FC = () => {
   const [typeCell, setTypeCell] = React.useState<TableCell>(TableCell.RECT)
   const [shownTypeCell, setShownTypeCell] = React.useState(false)

   const typeCellRef = React.useRef<HTMLDivElement>(null)

   const onShownChangeTypeCell = (shown: boolean) => {
      setShownTypeCell(shown)
   }
   const onClickTypeCell = (typeCell: TableCell) => () => {
      setTypeCell(typeCell)
      onShownChangeTypeCell(false)
   }
   return (
      <Dropdown
         shown={shownTypeCell}
         onShownChange={onShownChangeTypeCell}
         action='click'
         offsetDistance={
            typeCellRef.current?.clientHeight !== undefined ? -typeCellRef.current.clientHeight : undefined
         }
         offsetSkidding={0}
         sameWidth={false}
         placement={'bottom-end'}
         content={
            <Group mode='plain' style={{ width: 160 }}>
               <List>
                  <SimpleCell
                     sizeY={SizeType.COMPACT}
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                     after={TableCell.RECT === typeCell && <Icon28DoneOutline />}
                     onClick={onClickTypeCell(TableCell.RECT)}
                  >
                     {TABLE_TYPE_CELLS[TableCell.RECT]}
                  </SimpleCell>
                  <Separator wide />
                  <SimpleCell
                     sizeY={SizeType.COMPACT}
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                     after={TableCell.ROUND === typeCell && <Icon28DoneOutline />}
                     onClick={onClickTypeCell(TableCell.ROUND)}
                  >
                     {TABLE_TYPE_CELLS[TableCell.ROUND]}
                  </SimpleCell>
               </List>
            </Group>
         }
      >
         <SimpleCell
            getRootRef={typeCellRef}
            activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
            after={
               <Title level='3' weight='2'>
                  {TABLE_TYPE_CELLS[typeCell]}
               </Title>
            }
         >
            Тип ячеек
         </SimpleCell>
      </Dropdown>
   )
}
