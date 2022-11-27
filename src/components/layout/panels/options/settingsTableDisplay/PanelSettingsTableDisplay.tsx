import React from 'react'
import {
   Group,
   Header,
   Panel,
   PanelHeaderBack,
   PanelProps,
   Separator,
   SimpleCell,
   Switch,
   Title,
} from '@vkontakte/vkui'
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
            <GroupCard>
               <SimpleCell disabled after={<Switch />}>
                  Время
               </SimpleCell>
            </GroupCard>

            <GroupCard header={<Header mode='secondary'>Header</Header>}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  expandable
                  after={
                     <Title level='3' weight='2'>
                        Квадрат
                     </Title>
                  }
               >
                  Форма ячеек
               </SimpleCell>
               <Separator wide />
               <SimpleCell disabled after={<Switch />}>
                  Контур цветных ячеек
               </SimpleCell>
            </GroupCard>
            <GroupCard description='Отображается при квадратных, не цветных ячейках'>
               <SimpleCell disabled after={<Switch />}>
                  Сетка
               </SimpleCell>
            </GroupCard>

            <GroupCard
               header={
                  <Header mode='secondary' aside='...'>
                     Нажатия
                  </Header>
               }
            >
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
