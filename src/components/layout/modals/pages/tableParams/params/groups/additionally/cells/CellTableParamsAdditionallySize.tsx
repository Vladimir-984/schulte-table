import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { MODAL_PAGES } from 'router/modals'
import { AfterTableParamsAdditionallySize } from './afters/AfterTableParamsAdditionallySize'

export const CellTableParamsAdditionallySize: React.FC = () => {
   const router = useRouter()

   const onClickTableSize = () => {
      router.pushModal(MODAL_PAGES.TABLE_SIZE)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={<AfterTableParamsAdditionallySize />}
         expandable
         onClick={onClickTableSize}
      >
         Размер
      </SimpleCell>
   )
}
