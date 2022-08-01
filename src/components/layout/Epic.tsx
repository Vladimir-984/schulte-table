import React from 'react'
import { Epic as VKUIEpic } from '@vkontakte/vkui'
import { RootMain } from './roots/RootMain'
import { ROOTS } from 'router/roots'
import { useLocation } from '@happysanta/router'
import { Tabbar } from './Tabbar'
import { RootStatistics } from './roots/RootStatistics'

export const Epic: React.FC = () => {
   const location = useLocation()
   const activeStory = location.getRootId()
   return (
      <VKUIEpic activeStory={activeStory} tabbar={<Tabbar />}>
         <RootMain nav={ROOTS.MAIN} />
         <RootStatistics nav={ROOTS.STATISTICS} />
      </VKUIEpic>
   )
}
