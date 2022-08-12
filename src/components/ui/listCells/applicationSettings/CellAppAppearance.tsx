import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { PAGE_SETTINGS_APPEARANCE } from 'router/pages'
import { useRouter } from '@happysanta/router'
import { TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { useAppSelector } from 'hooks/redux'

export const APPEARANCE_TYPE: { [P in TypeApplicationAppearance]: string } = {
   auto: 'Системная',
   dark: 'Тёмная',
   light: 'Светлая',
}

export const CellAppAppearance: React.FC = () => {
   const router = useRouter()

   const appearanceType = useAppSelector((state) => state.application.appearance.type)

   const onClickSettingsAppearance = () => {
      router.pushPage(PAGE_SETTINGS_APPEARANCE)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         onClick={onClickSettingsAppearance}
         expandable
         indicator={APPEARANCE_TYPE[appearanceType]}
      >
         Тема
      </SimpleCell>
   )
}
