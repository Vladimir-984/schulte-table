import React from 'react'
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

   React.useEffect(() => {
      bridge.subscribe(listener)
      bridge.send('VKWebAppInit')

      return () => bridge.unsubscribe(listener)
   }, [listener])

   return (
      <ConfigProvider
         webviewType={WebviewType.VKAPPS}
         appearance={appearanceValue}
         platform={Platform.IOS}
         hasNewTokens={false}
      >
         <AdaptivityProvider>{children}</AdaptivityProvider>
      </ConfigProvider>
   )
}
