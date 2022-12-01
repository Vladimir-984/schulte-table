import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_HINTS } from 'router/pages'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableHintsIsEnabled } from 'store/selectors/tableOptions'

const getHintsIsActiveIndicator = (hints: boolean) => (hints ? 'Включены' : 'Выключены')

export const CellTableHints: React.FC = () => {
   const router = useRouter()

   const hintsIsEnabled = useAppSelector(selectChangeableTableHintsIsEnabled)

   const onClickSettingsHints = () => {
      router.pushPage(PAGE_SETTINGS_HINTS)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         onClick={onClickSettingsHints}
         expandable
         indicator={getHintsIsActiveIndicator(hintsIsEnabled)}
      >
         Подсказки
      </SimpleCell>
   )
}
