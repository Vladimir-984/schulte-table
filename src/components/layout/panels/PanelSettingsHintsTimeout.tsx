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
import { Icon28DoneOutline } from '@vkontakte/icons'

export const PanelSettingsHintsTimeout: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} separator={false}>
            Тайм-аут
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group separator='hide'>
            <Group mode='plain' separator='hide'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell after={<Icon28DoneOutline />}>10 сек</SimpleCell>
                     <Separator wide />
                     <SimpleCell>15 сек</SimpleCell>
                     <Separator wide />
                     <SimpleCell>20 сек</SimpleCell>
                     <Separator wide />
                     <SimpleCell>25 сек</SimpleCell>
                     <Separator wide />
                     <SimpleCell>30 сек</SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
