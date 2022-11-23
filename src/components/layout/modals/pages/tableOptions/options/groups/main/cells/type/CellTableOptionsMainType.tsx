import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { MODAL_PAGES } from 'router/modals'
import { AfterTableOptionsMainType } from './AfterTableOptionsMainType'

export const CellTableOptionsMainType: React.FC = () => {
   const router = useRouter()

   const onClickTableType = () => {
      router.pushModal(MODAL_PAGES.TABLE_TYPE)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={<AfterTableOptionsMainType />}
         expandable
         onClick={onClickTableType}
      >
         Тип
      </SimpleCell>
   )
}
