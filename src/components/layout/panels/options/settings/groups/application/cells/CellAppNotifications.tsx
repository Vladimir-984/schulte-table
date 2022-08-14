import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_NOTIFICATIONS } from 'router/pages'
import { IndicatorNotifications } from './indicators/IndicatorNotifications'

export const CellAppNotifications: React.FC = () => {
   const router = useRouter()

   const onClickSettingsNotifications = () => {
      router.pushPage(PAGE_SETTINGS_NOTIFICATIONS)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         onClick={onClickSettingsNotifications}
         expandable
         indicator={<IndicatorNotifications />}
      >
         Уведомления
      </SimpleCell>
   )
}
