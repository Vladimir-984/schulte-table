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
import { PAGE_SETTINGS_HINTS_STYLE, PAGE_SETTINGS_HINTS_TIMEOUT } from 'router/pages'

export const PanelSettingsHints: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }

   const onClickHintsTimeout = () => {
      router.pushPage(PAGE_SETTINGS_HINTS_TIMEOUT)
   }
   const onClickHintsStyle = () => {
      router.pushPage(PAGE_SETTINGS_HINTS_STYLE)
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} separator={false}>
            Подсказки
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group
            separator='hide'
            description='Если вы испытываете трудности с поиском символов, вы можете включить подсказки. TODO дописать что-то.
            Тайм-аут и Стиль появляются только при включенных подсказках
            '
         >
            <Group mode='plain' separator='hide'>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell disabled after={<Switch />}>
                        Подсказки
                     </SimpleCell>
                     <Separator wide />
                     <SimpleCell onClick={onClickHintsTimeout} expandable indicator={'10 сек'}>
                        Тайм-аут
                     </SimpleCell>
                     <Separator wide />
                     <SimpleCell onClick={onClickHintsStyle} expandable indicator={'Свечение'}>
                        Стиль
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
