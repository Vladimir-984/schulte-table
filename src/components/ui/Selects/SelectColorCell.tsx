import React from 'react'
import { Group, List, Separator, SimpleCell, SizeType, Title } from '@vkontakte/vkui'
import { Dropdown } from '@vkontakte/vkui/unstable'
import { TABLE_COLOR } from 'components/layout/panels/PanelSettingsCells'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { TableColor } from 'types/table'
import { Icon28DoneOutline } from '@vkontakte/icons'

export const SelectColorCell: React.FC = () => {
   const [colorCell, setColorCell] = React.useState<TableColor>(TableColor.DEFAULT)
   const [shownColorCell, setShownColorCell] = React.useState(false)

   const colorCellRef = React.useRef<HTMLDivElement>(null)

   const onChangeShownColorCell = (shown: boolean) => {
      setShownColorCell(shown)
   }

   const onClickColorCell = (color: TableColor) => () => {
      setColorCell(color)
      onChangeShownColorCell(false)
   }

   return (
      <Dropdown
         shown={shownColorCell}
         onShownChange={onChangeShownColorCell}
         action='click'
         placement='bottom-end'
         offsetDistance={
            colorCellRef.current?.clientHeight !== undefined ? -colorCellRef.current.clientHeight : undefined
         }
         offsetSkidding={0}
         sameWidth={false}
         content={
            <Group mode='plain' separator='hide' style={{ width: 180 }}>
               <List>
                  <SimpleCell
                     sizeY={SizeType.COMPACT}
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                     after={TableColor.DEFAULT === colorCell && <Icon28DoneOutline />}
                     onClick={onClickColorCell(TableColor.DEFAULT)}
                  >
                     {TABLE_COLOR[TableColor.DEFAULT]}
                  </SimpleCell>
                  <Separator wide />
                  <SimpleCell
                     sizeY={SizeType.COMPACT}
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                     after={TableColor.RANDOM === colorCell && <Icon28DoneOutline />}
                     onClick={onClickColorCell(TableColor.RANDOM)}
                  >
                     {TABLE_COLOR[TableColor.RANDOM]}
                  </SimpleCell>
               </List>
            </Group>
         }
      >
         <SimpleCell
            getRootRef={colorCellRef}
            activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
            after={
               <Title level='3' weight='2'>
                  {TABLE_COLOR[colorCell]}
               </Title>
            }
         >
            Цвет ячеек
         </SimpleCell>
      </Dropdown>
   )
}
