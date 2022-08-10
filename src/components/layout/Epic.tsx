import React from 'react'
import { Epic as VKUIEpic } from '@vkontakte/vkui'
import { RootMain } from './roots/RootMain'
<<<<<<< HEAD
import { RootProfile } from './roots/RootProfile'
import { ROOTS } from 'router/roots'
import { useLocation } from '@happysanta/router'
import { Tabbar } from './Tabbar'
=======
import { ROOTS } from 'router/roots'
import { useLocation } from '@happysanta/router'
import { Tabbar } from './Tabbar'
import { RootStatistics } from './roots/RootStatistics'
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4

export const Epic: React.FC = () => {
   const location = useLocation()
   const activeStory = location.getRootId()
<<<<<<< HEAD

   return (
      <VKUIEpic activeStory={activeStory} tabbar={<Tabbar />}>
         <RootMain nav={ROOTS.MAIN} />
         <RootProfile nav={ROOTS.PROFILE} />
=======
   return (
      <VKUIEpic activeStory={activeStory} tabbar={<Tabbar />}>
         <RootMain nav={ROOTS.MAIN} />
         <RootStatistics nav={ROOTS.STATISTICS} />
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
      </VKUIEpic>
   )
}
