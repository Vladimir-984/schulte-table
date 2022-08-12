import bridge, { AppearanceType, RequestPropsMap } from '@vkontakte/vk-bridge'
import { Appearance } from '@vkontakte/vkui'

export type TypeViewSettingsProps = RequestPropsMap['VKWebAppSetViewSettings']

export type TypeProps = {
   [P in AppearanceType]: TypeViewSettingsProps
}

export const VIEW_SETTINGS_PROPS: TypeProps = {
   [Appearance.LIGHT]: { status_bar_style: 'dark', action_bar_color: '#fff', navigation_bar_color: '#ddd' },
   [Appearance.DARK]: { status_bar_style: 'light', action_bar_color: '#000', navigation_bar_color: '#222' },
}

export const VKWebAppSetViewSettings = async (value: AppearanceType) => {
   try {
      if (process.env.NODE_ENV !== 'production') {
         return { result: false }
      }

      const data = await bridge.send('VKWebAppSetViewSettings', VIEW_SETTINGS_PROPS[value])

      return data
   } catch (_) {
      return { result: false }
   }
}
