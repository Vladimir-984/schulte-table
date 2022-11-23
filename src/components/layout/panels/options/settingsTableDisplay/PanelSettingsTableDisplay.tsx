import React from 'react'
import { Group, Header, Panel, PanelHeaderBack, PanelProps, Separator, SimpleCell, Switch } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

export const PanelSettingsTableDisplay: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   return (
      <Panel {...panelProps}>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} label={'Настройки'} />}>
            Отображение
         </PanelHeaderSeparator>

         <Group separator='hide'>
            <GroupCard>
               <SimpleCell disabled after={<Switch />}>
                  Время
               </SimpleCell>
            </GroupCard>

            <GroupCard header={<Header mode='secondary'>Нажатия</Header>}>
               <SimpleCell disabled after={<Switch />}>
                  Показывать верные
               </SimpleCell>
               <Separator wide />
               <SimpleCell disabled after={<Switch />}>
                  Показывать ошибки
               </SimpleCell>
            </GroupCard>
         </Group>
      </Panel>
   )
}
