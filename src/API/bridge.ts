import bridge, { AppearanceType, RequestPropsMap, TapticVibrationPowerType } from '@vkontakte/vk-bridge'
import { Appearance } from '@vkontakte/vkui'

const resultFalse = { result: false as const }

export type TypeViewSettingsProps = RequestPropsMap['VKWebAppSetViewSettings']

export type TypeProps = {
   [P in AppearanceType]: TypeViewSettingsProps
}

export const VIEW_SETTINGS_PROPS: TypeProps = {
   [Appearance.LIGHT]: { status_bar_style: 'dark', action_bar_color: '#fff', navigation_bar_color: '#eee' },
   [Appearance.DARK]: { status_bar_style: 'light', action_bar_color: '#000', navigation_bar_color: '#111' },
}

export const supportsVKWebAppSetViewSettings = () => {
   return bridge.supports('VKWebAppSetViewSettings')
}
export const supportsVKWebAppGetAds = () => {
   return bridge.supports<any>('VKWebAppGetAds')
}
export const supportsVKWebAppTapticImpactOccurred = () => {
   return bridge.supports('VKWebAppTapticImpactOccurred')
}

export const VKWebAppSetViewSettings = async (value: AppearanceType) => {
   try {
      if (!supportsVKWebAppSetViewSettings()) return resultFalse

      return await bridge.send('VKWebAppSetViewSettings', VIEW_SETTINGS_PROPS[value])
   } catch (_) {
      return resultFalse
   }
}

export const VKWebAppGetAds = async () => {
   try {
      if (!supportsVKWebAppGetAds()) return

      return await bridge.send<any>('VKWebAppGetAds')
   } catch (e) {}
}

export const VKWebAppTapticImpactOccurred = async (style: TapticVibrationPowerType = 'light') => {
   try {
      if (!supportsVKWebAppTapticImpactOccurred()) return resultFalse
      return await bridge.send('VKWebAppTapticImpactOccurred', { style })
   } catch (_) {
      return resultFalse
   }
}
