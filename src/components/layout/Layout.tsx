import React from 'react'
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
            <SplitCol animate={isAnimate}>
               <Epic />
            </SplitCol>
         </SplitLayout>
      </AppRoot>
   )
}
