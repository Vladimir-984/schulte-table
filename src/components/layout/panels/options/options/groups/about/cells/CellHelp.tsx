import React from 'react'
import { Icon24Help } from '@vkontakte/icons'
import { SimpleCell } from '@vkontakte/vkui'
import { AvatarIcon } from 'components/ui/AvatarIcon/AvatarIcon'
import { useRouter } from '@happysanta/router'
import { PAGE_HELP } from 'router/pages'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

export const CellHelp: React.FC = () => {
   const router = useRouter()
   const onClickHelp = () => {
      router.pushPage(PAGE_HELP)
   }
   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         before={
            <AvatarIcon color='green'>
               <Icon24Help width={22} height={22} fill='white' />
            </AvatarIcon>
         }
         expandable
         onClick={onClickHelp}
      >
         Помощь
      </SimpleCell>
   )
}
