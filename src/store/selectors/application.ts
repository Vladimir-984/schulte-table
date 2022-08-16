import { RootState } from 'store'

export const selectAppIsOnline = (state: RootState) => state.application.isOnline
export const selectAppIsActiveSound = (state: RootState) => state.application.sound
export const selectAppIsActiveVibration = (state: RootState) => state.application.vibration

export const selectAppAppearanceType = (state: RootState) => state.application.appearance.type
export const selectAppAppearanceValue = (state: RootState) => state.application.appearance.value
