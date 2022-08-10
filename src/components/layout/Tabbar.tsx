import React from 'react'

import { Tabbar as VKUITabbar, TabbarItem } from '@vkontakte/vkui'
<<<<<<< HEAD
import { Icon28HomeOutline, Icon28Profile } from '@vkontakte/icons'
import { ROOTS, STORIES_ROOT_PAGES } from 'router/roots'
import { useLocation, useRouter } from '@happysanta/router'
import { PANELS_TABBAR } from 'router/panels'
=======
import { Icon28HomeOutline, Icon28StatisticsOutline } from '@vkontakte/icons'
import { ROOTS, STORIES_ROOT_PAGES } from 'router/roots'
import { useLocation, useRouter } from '@happysanta/router'
import { PANELS_TABBAR, PANELS_TABBAR_SHADOW } from 'router/panels'
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4

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
<<<<<<< HEAD
      <VKUITabbar
         shadow
         // shadow={!PANELS_TABBAR_SHADOW[activePanel]}
         itemsLayout='vertical'
      >
         <TabbarItem selected={ROOTS.MAIN === activeStory} onClick={onClickStory(ROOTS.MAIN)} text='Главная'>
            <Icon28HomeOutline />
         </TabbarItem>
         <TabbarItem selected={ROOTS.PROFILE === activeStory} onClick={onClickStory(ROOTS.PROFILE)} text='Профиль'>
            <Icon28Profile />
=======
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
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
         </TabbarItem>
      </VKUITabbar>
   )
})
