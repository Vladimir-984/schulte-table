import React from 'react'
import { Group, Header, Panel, PanelHeaderBack, PanelProps, Separator, SimpleCell, Switch } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

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
            <GroupCard header={<Header mode='secondary'>Цвет</Header>}>
               <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} expandable indicator='По умолчанию'>
                  Ячейка
               </SimpleCell>
               <Separator wide />
               <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} expandable indicator='По умолчанию'>
                  Символ
               </SimpleCell>
            </GroupCard>
            <GroupCard>
               <SimpleCell disabled after={<Switch />}>
                  Время
               </SimpleCell>
               <Separator wide />
               <SimpleCell disabled after={<Switch />}>
                  Следующий символ
               </SimpleCell>
            </GroupCard>
            <GroupCard>
               <SimpleCell disabled after={<Switch />}>
                  Помечать найденные
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
