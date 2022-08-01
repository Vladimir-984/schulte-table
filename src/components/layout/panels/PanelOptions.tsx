import { useRouter } from '@happysanta/router'
import {
   Card,
   CardGrid,
   FixedLayout,
   Group,
   Panel,
   PanelHeader,
   PanelHeaderClose,
   PanelProps,
   Separator,
   SimpleCell,
} from '@vkontakte/vkui'
import React from 'react'
import { PAGE_SETTINGS } from 'router/pages'

export const PanelOptions: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   const onClickSettings = () => {
      router.pushPage(PAGE_SETTINGS)
   }
   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderClose onClick={onClickBack} />} separator={false}>
            Опции
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group>
            <Group separator='hide' mode='plain'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell expandable onClick={onClickSettings}>
                        Настройки
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
            <Group separator='hide' mode='plain'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell expandable>Помощь</SimpleCell>
                     <Separator wide />
                     <SimpleCell expandable>О приложении</SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
