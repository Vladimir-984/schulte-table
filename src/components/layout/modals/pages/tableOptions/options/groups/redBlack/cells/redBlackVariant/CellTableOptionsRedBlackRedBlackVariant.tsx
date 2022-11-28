import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { MODAL_PAGES } from 'router/modals'
import { AfterTableOptionsRedBlackRedBlackVariant } from './AfterTableOptionsRedBlackRedBlackVariant'

export const CellTableOptionsRedBlackRedBlackVariant: React.FC = () => {
   const router = useRouter()

   const onClickRedBlack = () => {
      router.pushModal(MODAL_PAGES.TABLE_RED_BLACK_VARIANT)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         after={<AfterTableOptionsRedBlackRedBlackVariant />}
         onClick={onClickRedBlack}
      >
         Красно-чёрный
      </SimpleCell>
   )
}
