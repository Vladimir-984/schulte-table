import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppearanceType, ParentConfigData } from '@vkontakte/vk-bridge'
import { setAppearanceManual } from 'store/asyncThunks/application'

export type TypeAppearanceType = AppearanceType | 'auto'

export interface IAppearance {
   value: AppearanceType
   type: TypeAppearanceType
}
interface INotifitations {}

interface IApplicationState {
   sounds: boolean
   vibration: boolean
   appearance: IAppearance

   config: ParentConfigData
   notifications: INotifitations
}

const initialState: IApplicationState = {
   sounds: false,
   vibration: false,
   appearance: {
      type: 'auto',
      value: 'light',
   },
   notifications: {},
   config: null!,
}

const applicationSlice = createSlice({
   name: 'application',
   initialState,
   reducers: {
      setSounds: (state, action: PayloadAction<boolean>) => {},
      setVibration: (state, action: PayloadAction<boolean>) => {},
      setConfig: (state, action: PayloadAction<ParentConfigData>) => {},
      setAppearance: (state, action: PayloadAction<AppearanceType>) => {},

      setSoundss: (state, action: PayloadAction<boolean>) => {},
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

export const { setSounds, setVibration, setAppearance, setConfig } = applicationSlice.actions

export const applicationReducer = applicationSlice.reducer
