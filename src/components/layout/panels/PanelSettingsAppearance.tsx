import { useRouter } from '@happysanta/router'
import { Icon28DoneOutline } from '@vkontakte/icons'
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
import React from 'react'

export const PanelSettingsAppearance: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} separator={false}>
            Тема
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group separator='hide'>
            <Group mode='plain' separator='hide'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell>Системная</SimpleCell>
                     <Separator wide />
                     <SimpleCell after={<Icon28DoneOutline />}>Светлая</SimpleCell>
                     <Separator wide />
                     <SimpleCell>Тёмная</SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
