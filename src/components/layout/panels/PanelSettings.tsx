import { useRouter } from '@happysanta/router'
import { Icon28DoneOutline } from '@vkontakte/icons'
import {
   Appearance,
   Card,
   CardGrid,
   FixedLayout,
   Group,
   Header,
   Panel,
   PanelHeader,
   PanelHeaderBack,
   PanelProps,
   Separator,
   SimpleCell,
   Switch,
} from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import React from 'react'
import {
   PAGE_SETTINGS_APPEARANCE,
   PAGE_SETTINGS_CELLS,
   PAGE_SETTINGS_HINTS,
   PAGE_SETTINGS_NOTIFICATIONS,
} from 'router/pages'
import { TypeApplicationAppearance } from 'store/slices/applicationSlice'

const getHintsIsActiveIndicator = (hints: boolean) => (hints ? 'Включены' : 'Выключены')

const getNotificationsIsActiveIndicator = (notifications: boolean) => (notifications ? 'Разрешены' : 'Запрещены')

export const APPEARANCE_TYPE: { [P in TypeApplicationAppearance]: string } = {
   auto: 'Системная',
   [Appearance.DARK]: 'Тёмная',
   [Appearance.LIGHT]: 'Светлая',
}

export const PanelSettings: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()
   const onClickBack = () => {
      router.popPage()
   }

   const onClickSettingsHints = () => {
      router.pushPage(PAGE_SETTINGS_HINTS)
   }

   const onClickSettingsCells = () => {
      router.pushPage(PAGE_SETTINGS_CELLS)
   }

   const onClickSettingsAppearance = () => {
      router.pushPage(PAGE_SETTINGS_APPEARANCE)
   }
   const onClickSettingsNotifications = () => {
      router.pushPage(PAGE_SETTINGS_NOTIFICATIONS)
   }

   return (
      <Panel {...panelProps}>
         <PanelHeader before={<PanelHeaderBack onClick={onClickBack} />} separator={false}>
            Настройки
         </PanelHeader>
         <FixedLayout vertical='top'>
            <Separator wide />
         </FixedLayout>
         <Group separator='hide'>
            <Group separator='hide' mode='plain' header={<Header mode='secondary'>Приложение</Header>}>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell disabled after={<Switch />}>
                        Звуки
                     </SimpleCell>
                     <Separator wide />
                     <SimpleCell disabled after={<Switch />}>
                        Вибрация
                     </SimpleCell>
                     <Separator wide />
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        onClick={onClickSettingsAppearance}
                        expandable
                        indicator={'Светлая'}
                     >
                        Тема
                     </SimpleCell>
                     <Separator wide />
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        onClick={onClickSettingsNotifications}
                        expandable
                        indicator={'Запрещены'}
                     >
                        Уведомления
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
            <Group separator='hide' mode='plain' header={<Header mode='secondary'>Таблица</Header>}>
               <CardGrid size='l'>
                  <Card>
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        onClick={onClickSettingsHints}
                        expandable
                        indicator={'Выключены'}
                     >
                        Подсказки
                     </SimpleCell>
                     <Separator wide />
                     <SimpleCell
                        activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                        onClick={onClickSettingsCells}
                        expandable
                     >
                        Ячейки
                     </SimpleCell>
                  </Card>
               </CardGrid>
            </Group>
         </Group>
      </Panel>
   )
}
