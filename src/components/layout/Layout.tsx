import React from 'react'
<<<<<<< HEAD
import { AppRoot, SplitCol, SplitLayout, ViewWidth } from '@vkontakte/vkui'
import { Popout } from './popouts/Popout'
import { Epic } from './Epic'
import { useAdaptivity } from '@vkontakte/vkui/dist/hooks/useAdaptivity'
import { ModalRoot } from './modals/ModalRoot'

export const Layout: React.FC = () => {
   const { viewWidth } = useAdaptivity()

   const isAnimate = viewWidth < ViewWidth.SMALL_TABLET

   return (
      <AppRoot noLegacyClasses mode='full' scroll='global'>
         <SplitLayout popout={<Popout />} modal={<ModalRoot />}>
=======
import { AppRoot, SplitCol, SplitLayout } from '@vkontakte/vkui'
import { Popout } from './popouts/Popout'
import { Epic } from './Epic'

export const Layout: React.FC = () => {
   const isAnimate = true
   return (
      <AppRoot noLegacyClasses mode='full' scroll='global'>
         <SplitLayout popout={<Popout />} modal={<></>}>
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
            <SplitCol animate={isAnimate}>
               <Epic />
            </SplitCol>
         </SplitLayout>
      </AppRoot>
   )
}
