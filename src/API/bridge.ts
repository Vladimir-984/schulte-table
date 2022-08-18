import bridge, { AppearanceType, RequestPropsMap, TapticVibrationPowerType } from '@vkontakte/vk-bridge'
import { Appearance } from '@vkontakte/vkui'

const resultFalse = { result: false } as const

export type TypeViewSettingsProps = RequestPropsMap['VKWebAppSetViewSettings']

export type TypeProps = {
   [P in AppearanceType]: TypeViewSettingsProps
}

export const VIEW_SETTINGS_PROPS: TypeProps = {
   [Appearance.LIGHT]: { status_bar_style: 'dark', action_bar_color: '#fff', navigation_bar_color: 'transparent' },
   // [Appearance.LIGHT]: { status_bar_style: 'dark', action_bar_color: '#fff', navigation_bar_color: '#eee' },
   [Appearance.DARK]: { status_bar_style: 'light', action_bar_color: '#000', navigation_bar_color: '#111' },
}

export const supportsVKWebAppSetViewSettings = () => {
   return bridge.supports('VKWebAppSetViewSettings')
}
export const supportsVKWebAppGetAds = () => {
   return bridge.supports<any>('VKWebAppGetAds')
}

export const VKWebAppSetViewSettings = async (value: AppearanceType) => {
   try {
      if (process.env.NODE_ENV !== 'production') {
         return resultFalse
      }
      if (!supportsVKWebAppSetViewSettings()) {
         return resultFalse
      }

      const data = await bridge.send('VKWebAppSetViewSettings', VIEW_SETTINGS_PROPS[value])

      return data
   } catch (_) {
      return resultFalse
   }
}

export const VKWebAppGetAds = async () => {
   try {
      if (!supportsVKWebAppGetAds()) return

      const data = await bridge.send<any>('VKWebAppGetAds')
      return data
   } catch (e) {}
}

export const VKWebAppTapticImpactOccurred = async (style: TapticVibrationPowerType = 'light') => {
   try {
      const data = await bridge.send('VKWebAppTapticImpactOccurred', { style })
      return data
   } catch (_) {
      return resultFalse
   }
}
