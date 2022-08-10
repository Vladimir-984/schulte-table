import React from 'react'
<<<<<<< HEAD
import { AdaptivityProvider, ConfigProvider, Platform, WebviewType } from '@vkontakte/vkui'

import bridge, { VKBridgeSubscribeHandler } from '@vkontakte/vk-bridge'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setConfig } from 'store/slices/applicationSlice'

export const VKUIProvider: React.FC = ({ children }) => {
   const dispatch = useAppDispatch()
   const appearanceValue = useAppSelector((state) => state.application.appearance.value)

   const listener: VKBridgeSubscribeHandler = React.useCallback(
      (e) => {
         if (e.detail.type.startsWith('webpack')) return
         switch (e.detail.type) {
            case 'VKWebAppUpdateConfig': {
               dispatch(setConfig(e.detail.data))
               break
            }
            default: {
            }
         }

         console.log(e.detail.type, e.detail.data)
      },
      [dispatch]
   )
=======
import { AdaptivityProvider, Appearance, ConfigProvider, Platform, WebviewType } from '@vkontakte/vkui'

import bridge, { VKBridgeSubscribeHandler } from '@vkontakte/vk-bridge'

export const VKUIProvider: React.FC = ({ children }) => {
   const [appearance, setAppearance] = React.useState<Appearance>(Appearance.LIGHT)

   const listener: VKBridgeSubscribeHandler = (e) => {}
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4

   React.useEffect(() => {
      bridge.subscribe(listener)
      bridge.send('VKWebAppInit')

      return () => bridge.unsubscribe(listener)
<<<<<<< HEAD
   }, [listener])
=======
   }, [])
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4

   return (
      <ConfigProvider
         webviewType={WebviewType.VKAPPS}
<<<<<<< HEAD
         appearance={appearanceValue}
=======
         appearance={appearance}
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
         platform={Platform.IOS}
         hasNewTokens={false}
      >
         <AdaptivityProvider>{children}</AdaptivityProvider>
      </ConfigProvider>
   )
}
