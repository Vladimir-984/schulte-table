import React from 'react'

import { Tabbar as VKUITabbar, TabbarItem } from '@vkontakte/vkui'
import { Icon28HomeOutline, Icon28Profile } from '@vkontakte/icons'
import { ROOTS, STORIES_ROOT_PAGES } from 'router/roots'
import { useLocation, useRouter } from '@happysanta/router'
import { PANELS_TABBAR } from 'router/panels'

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
         </TabbarItem>
      </VKUITabbar>
   )
})
