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
