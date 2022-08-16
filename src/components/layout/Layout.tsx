import React from 'react'
import { AppRoot, SplitCol, SplitLayout, ViewWidth } from '@vkontakte/vkui'
import { Popout } from './popouts/Popout'
import { Epic } from './Epic'
import { useAdaptivity } from '@vkontakte/vkui/dist/hooks/useAdaptivity'
import { ModalRoot } from './modals/ModalRoot'
import { useAppDispatch } from 'hooks/redux'
import { setOnline } from 'store/slices/applicationSlice'

export const Layout: React.FC = React.memo(() => {
   const dispatch = useAppDispatch()
   const { viewWidth } = useAdaptivity()

   const isAnimate = viewWidth < ViewWidth.SMALL_TABLET

   React.useEffect(() => {
      window.addEventListener('online', onOnline)
      window.addEventListener('offline', onOffline)

      return () => {
         window.removeEventListener('online', onOnline)
         window.removeEventListener('offline', onOffline)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const onOnline: EventListener = (e) => {
      dispatch(setOnline(true))
   }
   const onOffline: EventListener = (e) => {
      dispatch(setOnline(false))
   }

   return (
      <AppRoot noLegacyClasses mode='full' scroll='global'>
         <SplitLayout popout={<Popout />} modal={<ModalRoot />}>
            <SplitCol animate={isAnimate}>
               <Epic />
            </SplitCol>
         </SplitLayout>
      </AppRoot>
   )
})
