import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { AfterTableOptionsColoredColorVariant } from './AfterTableOptionsColoredColorVariant'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { MODAL_PAGES } from 'router/modals'

export const CellTableOptionsColoredColorVariant: React.FC = () => {
   const router = useRouter()

   const onClickTableColorVariant = () => {
      router.pushModal(MODAL_PAGES.TABLE_COLOR)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={<AfterTableOptionsColoredColorVariant />}
         expandable
         onClick={onClickTableColorVariant}
      >
         Цветные
      </SimpleCell>
   )
}
