import React from 'react'
import { AppRoot, SplitCol, SplitLayout } from '@vkontakte/vkui'
import { Popout } from './popouts/Popout'
import { Epic } from './Epic'

export const Layout: React.FC = () => {
   const isAnimate = true
   return (
      <AppRoot noLegacyClasses mode='full' scroll='global'>
         <SplitLayout popout={<Popout />} modal={<></>}>
            <SplitCol animate={isAnimate}>
               <Epic />
            </SplitCol>
         </SplitLayout>
      </AppRoot>
   )
}
