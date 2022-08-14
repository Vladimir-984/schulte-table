import React from 'react'
import { useRouter } from '@happysanta/router'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { MODAL_PAGES } from 'router/modals'
import { AfterTableParamsMainMode } from './afters/AfterTableParamsMainMode'

export const CellTableParamsMainMode: React.FC = () => {
   const router = useRouter()

   const onClickTableMode = () => {
      router.pushModal(MODAL_PAGES.TABLE_MODE)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={<AfterTableParamsMainMode />}
         expandable
         onClick={onClickTableMode}
      >
         Режим
      </SimpleCell>
   )
}
