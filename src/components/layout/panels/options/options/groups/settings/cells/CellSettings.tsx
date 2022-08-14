import React from 'react'
import { SimpleCell } from '@vkontakte/vkui'
import { Icon24Settings } from '@vkontakte/icons'
import { useRouter } from '@happysanta/router'
import { AvatarIcon } from 'components/ui/AvatarIcon/AvatarIcon'
import { PAGE_SETTINGS } from 'router/pages'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

export const CellSettings: React.FC = () => {
   const router = useRouter()
   const onClickSettings = () => {
      router.pushPage(PAGE_SETTINGS)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         before={
            <AvatarIcon color='red'>
               <Icon24Settings width={22} height={22} fill='white' />
            </AvatarIcon>
         }
         expandable
         onClick={onClickSettings}
      >
         Настройки
      </SimpleCell>
   )
}
