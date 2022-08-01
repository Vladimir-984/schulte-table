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
} from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { Icon28DoneOutline } from '@vkontakte/icons'

export const PanelSettingsHintsStyle: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} label='Подсказки' />} separator={false}>
            Стиль
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group separator='hide'>
            <Group mode='plain' separator='hide'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell after={<Icon28DoneOutline />}>Свечение</SimpleCell>
                     <Separator wide />
                     <SimpleCell>Пульсация</SimpleCell>
                     <Separator wide />
                     <SimpleCell>Покачивание</SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
