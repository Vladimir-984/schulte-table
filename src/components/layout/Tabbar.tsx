import React from 'react'

import { Tabbar as VKUITabbar, TabbarItem } from '@vkontakte/vkui'
import { Icon28HomeOutline, Icon28StatisticsOutline } from '@vkontakte/icons'
import { ROOTS, STORIES_ROOT_PAGES } from 'router/roots'
import { useLocation, useRouter } from '@happysanta/router'
import { PANELS_TABBAR, PANELS_TABBAR_SHADOW } from 'router/panels'

interface TabbarProps {}

export const Tabbar: React.FC<TabbarProps> = React.memo(() => {
   const router = useRouter()
   const location = useLocation()
   const activeStory = location.getRootId()
   const activePanel = location.getPanelId()

   const onClickStory = (story: string) => () => {
      const page = STORIES_ROOT_PAGES[story]
      router.pushPage(page)
   }

   if (!PANELS_TABBAR[activePanel]) return null

   return (
      <VKUITabbar shadow={!PANELS_TABBAR_SHADOW[activePanel]} itemsLayout='vertical'>
         <TabbarItem selected={ROOTS.MAIN === activeStory} onClick={onClickStory(ROOTS.MAIN)} text='Главная'>
            <Icon28HomeOutline />
         </TabbarItem>
         <TabbarItem
            selected={ROOTS.STATISTICS === activeStory}
            onClick={onClickStory(ROOTS.STATISTICS)}
            text='Статистика'
         >
            <Icon28StatisticsOutline />
         </TabbarItem>
      </VKUITabbar>
   )
})
