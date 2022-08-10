import React from 'react'
import { Epic as VKUIEpic } from '@vkontakte/vkui'
import { RootMain } from './roots/RootMain'
import { RootProfile } from './roots/RootProfile'
import { ROOTS } from 'router/roots'
import { useLocation } from '@happysanta/router'
import { Tabbar } from './Tabbar'

export const Epic: React.FC = () => {
   const location = useLocation()
   const activeStory = location.getRootId()

   return (
      <VKUIEpic activeStory={activeStory} tabbar={<Tabbar />}>
         <RootMain nav={ROOTS.MAIN} />
         <RootProfile nav={ROOTS.PROFILE} />
      </VKUIEpic>
   )
}
