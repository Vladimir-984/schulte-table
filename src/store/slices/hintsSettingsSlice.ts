import { createSlice } from '@reduxjs/toolkit'

export enum TableHintStyle {
   GLOW = 'glow',
   PULSATION = 'pulsation',
   SCALE = 'scale',
}
export interface ITableHintsSettings {
   hintsIsActive: boolean
   hintsTimeoutSeconds: number
   hintsStyle: TableHintStyle
}
interface IHintsSettingsState extends ITableHintsSettings {}
const initialState: IHintsSettingsState = {
   hintsIsActive: false,
   hintsTimeoutSeconds: 10,
   hintsStyle: TableHintStyle.GLOW,
}
const hintsSettingsSlice = createSlice({
   name: 'hintsSettings',
   initialState,
   reducers: {
      setHintsActive: (state, action) => {
         state.hintsIsActive = action.payload
      },
      setHintsStyle: (state, action) => {
         state.hintsStyle = action.payload
      },
      setHintsTimeoutSeconds: (state, action) => {
         state.hintsTimeoutSeconds = action.payload
      },
   },
   extraReducers: (builder) => {},
})
export const { setHintsActive, setHintsStyle, setHintsTimeoutSeconds } = hintsSettingsSlice.actions
export const hintsSettingsReducer = hintsSettingsSlice.reducer
