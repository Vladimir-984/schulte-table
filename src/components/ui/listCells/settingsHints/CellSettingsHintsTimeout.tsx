import React from 'react'
import { useRouter } from '@happysanta/router'
import { SimpleCell } from '@vkontakte/vkui'
import { useAppSelector } from 'hooks/redux'
import { PAGE_SETTINGS_HINTS_TIMEOUT } from 'router/pages'
import { selectHintsTimeout } from 'store/selectors/tableSettings'
import { secondShortFormatter } from 'utils/format'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

export const CellSettingsHintsTimeout: React.FC = () => {
   const router = useRouter()

   const hintsTimeout = useAppSelector(selectHintsTimeout)

   const onClickHintsTimeout = () => {
      router.pushPage(PAGE_SETTINGS_HINTS_TIMEOUT)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         indicator={secondShortFormatter.format(hintsTimeout)}
         onClick={onClickHintsTimeout}
      >
         Тайм-аут
      </SimpleCell>
   )
}
