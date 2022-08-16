import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_TABLE_DISPLAY } from 'router/pages'

export const CellTableDisplay: React.FC = () => {
   const router = useRouter()

   const onClickCellTableView = () => {
      router.pushPage(PAGE_SETTINGS_TABLE_DISPLAY)
   }

   return (
      <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} expandable onClick={onClickCellTableView}>
         Отображение
      </SimpleCell>
   )
}
