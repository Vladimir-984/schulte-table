import React from 'react'
import { useRouter } from '@happysanta/router'
import { Icon24Info } from '@vkontakte/icons'
import { SimpleCell } from '@vkontakte/vkui'
import { AvatarIcon } from 'components/ui/AvatarIcon/AvatarIcon'
import { PAGE_ABOUT } from 'router/pages'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

export const CellAbout: React.FC = () => {
   const router = useRouter()
   const onClickAbout = () => {
      router.pushPage(PAGE_ABOUT)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         before={
            <AvatarIcon color='blue'>
               <Icon24Info width={22} height={22} fill='white' />
            </AvatarIcon>
         }
         expandable
         onClick={onClickAbout}
      >
         О приложении
      </SimpleCell>
   )
}
