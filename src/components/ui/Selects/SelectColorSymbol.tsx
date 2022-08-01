import React from 'react'
import { Group, List, Separator, SimpleCell, SizeType, Title } from '@vkontakte/vkui'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { Dropdown } from '@vkontakte/vkui/unstable'
import { TABLE_COLOR } from 'components/layout/panels/PanelSettingsCells'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { TableColor } from 'types/table'

export const SelectColorSymbol: React.FC = () => {
   const [colorSymbol, setColorSymbol] = React.useState<TableColor>(TableColor.DEFAULT)
   const [shownColorSymbol, setShownColorSymbol] = React.useState(false)
   const colorSymbolRef = React.useRef<HTMLDivElement>(null)

   const onShownChangeColorSymbol = (shown: boolean) => {
      setShownColorSymbol(shown)
   }

   const onClickColorSymbol = (color: TableColor) => () => {
      setColorSymbol(color)
      onShownChangeColorSymbol(false)
   }
   return (
      <Dropdown
         shown={shownColorSymbol}
         onShownChange={onShownChangeColorSymbol}
         action='click'
         placement='bottom-end'
         offsetDistance={
            colorSymbolRef.current?.clientHeight !== undefined ? -colorSymbolRef.current.clientHeight : undefined
         }
         offsetSkidding={0}
         sameWidth={false}
         content={
            <Group mode='plain' separator='hide' style={{ width: 180 }}>
               <List>
                  <SimpleCell
                     sizeY={SizeType.COMPACT}
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                     after={TableColor.DEFAULT === colorSymbol && <Icon28DoneOutline />}
                     onClick={onClickColorSymbol(TableColor.DEFAULT)}
                  >
                     {TABLE_COLOR[TableColor.DEFAULT]}
                  </SimpleCell>
                  <Separator wide />
                  <SimpleCell
                     sizeY={SizeType.COMPACT}
                     activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                     after={TableColor.RANDOM === colorSymbol && <Icon28DoneOutline />}
                     onClick={onClickColorSymbol(TableColor.RANDOM)}
                  >
                     {TABLE_COLOR[TableColor.RANDOM]}
                  </SimpleCell>
               </List>
            </Group>
         }
      >
         <SimpleCell
            getRootRef={colorSymbolRef}
            activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
            after={
               <Title level='3' weight='2'>
                  {TABLE_COLOR[colorSymbol]}
               </Title>
            }
         >
            Цвет символов
         </SimpleCell>
      </Dropdown>
   )
}
