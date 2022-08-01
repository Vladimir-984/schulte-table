import React from 'react'
import {
   Card,
   CardGrid,
   FixedLayout,
   Group,
   Panel,
   PanelHeader,
   PanelHeaderBack,
   PanelProps,
   Separator,
   SimpleCell,
   Switch,
} from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'

import { TableColor } from 'types/table'
import { SelectColorCell } from 'components/ui/Selects/SelectColorCell'
import { SelectColorSymbol } from 'components/ui/Selects/SelectColorSymbol'
import { SelectTypeCell } from 'components/ui/Selects/SelectTypeCell'

export const TABLE_COLOR = {
   [TableColor.DEFAULT]: 'По умолчанию',
   [TableColor.RANDOM]: 'Случайный',
}

export const PanelSettingsCells: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack label='Настройки' onClick={onClickBack} />} separator={false}>
            Ячейки
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group separator='hide'>
            <Group mode='plain' separator='hide' description='TODO: написать описание'>
               <CardGrid size='l'>
                  <Card>
                     <SelectColorCell />
                     <Separator wide />
                     <SelectColorSymbol />
                  </Card>
               </CardGrid>
            </Group>
            <Group mode='plain' separator='hide' description='TODO: написать описание'>
               <CardGrid size='l'>
                  <Card>
                     <SelectTypeCell />
                  </Card>
               </CardGrid>
            </Group>
            <Group mode='plain' separator='hide' description='TODO: написать описание'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell disabled after={<Switch />}>
                        Помечать выбранные
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
            <Group mode='plain' separator='hide' description='TODO: написать описание'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell disabled after={<Switch />}>
                        Показывать ошибки
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
/*   <Separator wide />
      <SimpleCell
         sizeY={SizeType.COMPACT}
         after={
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <Avatar size={28} mode='image' style={{ color: '#fcb' }} />
               <Icon24ChevronDown
                  style={{
                     color: `var(--icon_tertiary)`,
                     paddingRight: 4,
                     paddingLeft: 4,
                  }}
               />
            </div>
         }
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
      >
         Свой
      </SimpleCell>
      <Div>
         <HexColorPicker />
      </Div> */
//    after={
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//          <Avatar mode='image' size={28} style={{ color: '#fcd' }} />
//       </div>
//    }
