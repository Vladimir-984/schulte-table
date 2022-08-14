import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_HINTS_STYLE } from 'router/pages'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { IndicatorSettingsHintsStyle } from './indicators/IndicatorSettingsHintsStyle'

export const CellSettingsHintsStyle: React.FC = () => {
   const router = useRouter()

   const onClickHintsStyle = () => {
      router.pushPage(PAGE_SETTINGS_HINTS_STYLE)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={<IndicatorSettingsHintsStyle />}
         onClick={onClickHintsStyle}
      >
         Стиль
      </SimpleCell>
   )
}
