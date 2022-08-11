import { createAsyncThunk } from '@reduxjs/toolkit'
import { IApplicationAppearance, TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { RootState } from 'store'

import { VKWebAppSetViewSettings } from 'API/bridge'

export const setAppearanceManual = createAsyncThunk<IApplicationAppearance, TypeApplicationAppearance>(
   'application/setAppearanceManual',
   async (type: TypeApplicationAppearance, thunkAPI) => {
      try {
         const appearance: IApplicationAppearance = {
            type,
            value: 'light',
         }
         if (type === 'auto') {
            const value = (thunkAPI.getState() as RootState).application.config.appearance
            appearance.value = value
         } else {
            appearance.value = type
         }

         await VKWebAppSetViewSettings(appearance.value)

         return appearance
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)
