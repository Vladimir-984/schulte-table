import React from 'react'
import { useRouter } from '@happysanta/router'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { MODAL_PAGES } from 'router/modals'
import { AfterTableParamsMainVariant } from './afters/AfterTableParamsMainVariant'

export const CellTableParamsMainVariant: React.FC = () => {
   const router = useRouter()

   const onClickTableVariant = () => {
      router.pushModal(MODAL_PAGES.TABLE_VARIANT)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={<AfterTableParamsMainVariant />}
         expandable
         onClick={onClickTableVariant}
      >
         Вариант
      </SimpleCell>
   )
}
