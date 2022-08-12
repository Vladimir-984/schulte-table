import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { PAGE_SETTINGS_APPEARANCE } from 'router/pages'
import { useRouter } from '@happysanta/router'
import { useAppSelector } from 'hooks/redux'
import { APPEARANCE_TYPE } from 'lists'
import { selectAppAppearanceType } from 'store/selectors/application'

export const CellAppAppearance: React.FC = () => {
   const router = useRouter()

   const appearanceType = useAppSelector(selectAppAppearanceType)

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
