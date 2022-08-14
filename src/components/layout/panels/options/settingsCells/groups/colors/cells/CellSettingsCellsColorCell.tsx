import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_CELLS_COLOR_CELL } from 'router/pages'
import { IndicatorSettingsCellsColorCell } from './indicators/IndicatorSettingsCellsColorCell'

export const CellSettingsCellsColorCell: React.FC = () => {
   const router = useRouter()

   const onClickColorCell = () => {
      router.pushPage(PAGE_SETTINGS_CELLS_COLOR_CELL)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={<IndicatorSettingsCellsColorCell />}
         onClick={onClickColorCell}
      >
         Цвет ячеек
      </SimpleCell>
   )
}
