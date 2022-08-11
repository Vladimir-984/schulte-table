import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppearanceType, ParentConfigData } from '@vkontakte/vk-bridge'
import { VKWebAppSetViewSettings } from 'API/bridge'
import { setAppearanceManual } from 'store/asyncThunks/application'

interface ISettingsNotifications {}

export type TypeApplicationAppearance = AppearanceType | 'auto'

export interface IApplicationAppearance {
   type: TypeApplicationAppearance
   value: AppearanceType
}

interface ISettingsApp {
   sounds: boolean
   vibration: boolean
   appearance: IApplicationAppearance
   notifications: ISettingsNotifications
}

interface IApplicationState extends ISettingsApp {
   config: ParentConfigData
}

const initialState: IApplicationState = {
   sounds: true,
   vibration: true,
   appearance: {
      value: 'light',
      type: null!,
   },
   notifications: {},

   config: {} as ParentConfigData,
}

const applicationSlice = createSlice({
   name: 'application',
   initialState,
   reducers: {
      //application
      setSounds: (state, action: PayloadAction<boolean>) => {
         state.sounds = action.payload
      },
      setVibration: (state, action: PayloadAction<boolean>) => {
         state.vibration = action.payload
      },

      setConfig: (state, action: PayloadAction<ParentConfigData>) => {
         state.config = action.payload

         if (state.appearance.type === 'auto') {
            state.appearance.value = state.config.appearance
            VKWebAppSetViewSettings(state.config.appearance)
         }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(setAppearanceManual.pending, (state, action) => {})
      builder.addCase(setAppearanceManual.fulfilled, (state, action) => {
         state.appearance.type = action.payload.type
         state.appearance.value = action.payload.value
      })
      builder.addCase(setAppearanceManual.rejected, (state, action) => {})
   },
})

export const { setSounds, setVibration, setConfig } = applicationSlice.actions

export const applicationReducer = applicationSlice.reducer
