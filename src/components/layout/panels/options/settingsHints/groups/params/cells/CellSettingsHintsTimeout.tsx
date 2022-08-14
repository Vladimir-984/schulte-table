import React from 'react'
import { useRouter } from '@happysanta/router'
import { SimpleCell } from '@vkontakte/vkui'
import { PAGE_SETTINGS_HINTS_TIMEOUT } from 'router/pages'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { IndicatorSettingsHintsTimeout } from './indicators/IndicatorSettingsHintsTimeout'

export const CellSettingsHintsTimeout: React.FC = () => {
   const router = useRouter()

   const onClickHintsTimeout = () => {
      router.pushPage(PAGE_SETTINGS_HINTS_TIMEOUT)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={<IndicatorSettingsHintsTimeout />}
         onClick={onClickHintsTimeout}
      >
         Тайм-аут
      </SimpleCell>
   )
}
