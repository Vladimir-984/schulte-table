import React from 'react'
import { useRouter } from '@happysanta/router'
import { SimpleCell } from '@vkontakte/vkui'
import { PAGE_SETTINGS_HINTS_TIMEOUT } from 'router/pages'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { IndicatorHintsOptionsTimeout } from './indicators/IndicatorHintsOptionsTimeout'

export const CellHintsOptionsTimeout: React.FC = () => {
   const router = useRouter()

   const onClickHintsTimeout = () => {
      router.pushPage(PAGE_SETTINGS_HINTS_TIMEOUT)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={<IndicatorHintsOptionsTimeout />}
         onClick={onClickHintsTimeout}
      >
         Тайм-аут
      </SimpleCell>
   )
}
