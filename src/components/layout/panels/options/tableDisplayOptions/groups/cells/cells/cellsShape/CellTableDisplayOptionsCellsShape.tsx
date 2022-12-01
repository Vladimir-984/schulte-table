import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { AfterTableDisplayOptionsCellsShape } from './AfterTableDisplayOptionsCellsShape'
import { useRouter } from '@happysanta/router'
import { PAGE_SETTINGS_TABLE_DISPLAY_CELLS_SHAPE } from 'router/pages'

export const CellTableDisplayOptionsCellsShape: React.FC = () => {
   const router = useRouter()
   const onClickCellsShape = () => {
      router.pushPage(PAGE_SETTINGS_TABLE_DISPLAY_CELLS_SHAPE)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         onClick={onClickCellsShape}
         after={<AfterTableDisplayOptionsCellsShape />}
      >
         Форма ячеек
      </SimpleCell>
   )
}
