import React from 'react'
import { AdaptivityProvider, Appearance, ConfigProvider, Platform, WebviewType } from '@vkontakte/vkui'

import bridge, { VKBridgeSubscribeHandler } from '@vkontakte/vk-bridge'

export const VKUIProvider: React.FC = ({ children }) => {
   const [appearance, setAppearance] = React.useState<Appearance>(Appearance.LIGHT)

   const listener: VKBridgeSubscribeHandler = (e) => {}

   React.useEffect(() => {
      bridge.subscribe(listener)
      bridge.send('VKWebAppInit')

      return () => bridge.unsubscribe(listener)
   }, [])

   return (
      <ConfigProvider
         webviewType={WebviewType.VKAPPS}
         appearance={appearance}
         platform={Platform.IOS}
         hasNewTokens={false}
      >
         <AdaptivityProvider>{children}</AdaptivityProvider>
      </ConfigProvider>
   )
}
