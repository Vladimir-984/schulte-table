import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_CELLS } from 'router/pages'

export const CellTableCells: React.FC = () => {
   const router = useRouter()
   const onClickSettingsCells = () => {
      router.pushPage(PAGE_SETTINGS_CELLS)
   }
   return (
      <SimpleCell activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY} onClick={onClickSettingsCells} expandable>
         Ячейки
      </SimpleCell>
   )
}
