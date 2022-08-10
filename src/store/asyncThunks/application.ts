import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAppearance, TypeAppearanceType } from 'store/slices/applicationSlice'
import { RootState } from 'store'

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

export const setAppearanceManual = createAsyncThunk<IAppearance, TypeAppearanceType>(
   'application/setAppearanceManual',
   async (type: TypeAppearanceType, thunkAPI) => {
      try {
         const appearance: IAppearance = {
            type,
            value: 'light',
         }
         if (type === 'auto') {
            const value = (thunkAPI.getState() as RootState).application.config.appearance
            appearance.value = value
         } else {
            appearance.value = type
         }

         await bridge.send('VKWebAppSetViewSettings', VIEW_SETTINGS_PROPS[appearance.value])

         return appearance
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)
