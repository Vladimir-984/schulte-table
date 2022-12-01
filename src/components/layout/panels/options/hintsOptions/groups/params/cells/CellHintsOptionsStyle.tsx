import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_HINTS_STYLE } from 'router/pages'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { IndicatorHintsOptionsStyle } from './indicators/IndicatorHintsOptionsStyle'

export const CellHintsOptionsStyle: React.FC = () => {
   const router = useRouter()

   const onClickHintsStyle = () => {
      router.pushPage(PAGE_SETTINGS_HINTS_STYLE)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={<IndicatorHintsOptionsStyle />}
         onClick={onClickHintsStyle}
      >
         Стиль
      </SimpleCell>
   )
}
