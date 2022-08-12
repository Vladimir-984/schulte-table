import { RootState } from 'store'

export const selectAppIsActiveSounds = (state: RootState) => state.application.sounds
export const selectAppIsActiveVibration = (state: RootState) => state.application.vibration

export const selectAppAppearanceType = (state: RootState) => state.application.appearance.type
export const selectAppAppearanceValue = (state: RootState) => state.application.appearance.value
