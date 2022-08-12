import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_HINTS_STYLE } from 'router/pages'
import { useAppSelector } from 'hooks/redux'
import { selectHintsStyle } from 'store/selectors/tableSettings'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { HINTS_STYLE_TYPE } from 'lists'

export const CellSettingsHintsStyle: React.FC = () => {
   const router = useRouter()
   const hintsStyle = useAppSelector(selectHintsStyle)

   const onClickHintsStyle = () => {
      router.pushPage(PAGE_SETTINGS_HINTS_STYLE)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={HINTS_STYLE_TYPE[hintsStyle]}
         onClick={onClickHintsStyle}
      >
         Стиль
      </SimpleCell>
   )
}
