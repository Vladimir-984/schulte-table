import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { MODAL_PAGES } from 'router/modals'
import { AfterTableOptionsAdditionallySize } from './AfterTableOptionsAdditionallySize'

export const CellTableOptionsAdditionallySize: React.FC = () => {
   const router = useRouter()

   const onClickTableSize = () => {
      router.pushModal(MODAL_PAGES.TABLE_SIZE)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={<AfterTableOptionsAdditionallySize />}
         expandable
         onClick={onClickTableSize}
      >
         Размер
      </SimpleCell>
   )
}
