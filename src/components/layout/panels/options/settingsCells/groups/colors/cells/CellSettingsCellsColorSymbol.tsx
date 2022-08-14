import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_CELLS_COLOR_SYMBOL } from 'router/pages'
import { IndicatorSettingsCellsColorSymbol } from './indicators/IndicatorSettingsCellsColorSymbol'

export const CellSettingsCellsColorSymbol: React.FC = () => {
   const router = useRouter()

   const onClickColorSymbol = () => {
      router.pushPage(PAGE_SETTINGS_CELLS_COLOR_SYMBOL)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={<IndicatorSettingsCellsColorSymbol />}
         onClick={onClickColorSymbol}
      >
         Цвет символов
      </SimpleCell>
   )
}
