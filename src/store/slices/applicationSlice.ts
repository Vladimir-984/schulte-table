import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppearanceType, ParentConfigData } from '@vkontakte/vk-bridge'
import { VKWebAppSetViewSettings } from 'API/bridge'
import { setAppearance } from 'store/asyncThunks/application'

interface ISettingsNotifications {}

export type TypeApplicationAppearance = AppearanceType | 'auto'

export interface IApplicationAppearance {
   type: TypeApplicationAppearance
   value: AppearanceType
}

interface ISettingsApp {
   isOnline: boolean
   sound: boolean
   vibration: boolean
   appearance: IApplicationAppearance
   notifications: ISettingsNotifications
}

interface IApplicationState extends ISettingsApp {
   config: ParentConfigData
}

const initialState: IApplicationState = {
   isOnline: navigator.onLine,
   sound: true,
   vibration: true,
   appearance: {
      value: 'light',
      type: 'auto',
   },
   notifications: {},

   config: {} as ParentConfigData,
}

const applicationSlice = createSlice({
   name: 'application',
   initialState,
   reducers: {
      //application

      setOnline: (state, action: PayloadAction<boolean>) => {
         state.isOnline = action.payload
      },
      setSound: (state, action: PayloadAction<boolean>) => {
         state.sound = action.payload
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
      builder.addCase(setAppearance.pending, (state, action) => {})
      builder.addCase(setAppearance.fulfilled, (state, action) => {
         state.appearance.type = action.payload.type
         state.appearance.value = action.payload.value
      })
      builder.addCase(setAppearance.rejected, (state, action) => {})
   },
})

export const { setOnline, setSound, setVibration, setConfig } = applicationSlice.actions

export const applicationReducer = applicationSlice.reducer
