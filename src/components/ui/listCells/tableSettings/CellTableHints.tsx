import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_HINTS } from 'router/pages'
import { useAppSelector } from 'hooks/redux'
import { selectHintsIsActive } from 'store/selectors/tableSettings'

const getHintsIsActiveIndicator = (hints: boolean) => (hints ? 'Включены' : 'Выключены')

export const CellTableHints: React.FC = () => {
   const router = useRouter()

   const hintsIsActive = useAppSelector(selectHintsIsActive)

   const onClickSettingsHints = () => {
      router.pushPage(PAGE_SETTINGS_HINTS)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         onClick={onClickSettingsHints}
         expandable
         indicator={getHintsIsActiveIndicator(hintsIsActive)}
      >
         Подсказки
      </SimpleCell>
   )
}
