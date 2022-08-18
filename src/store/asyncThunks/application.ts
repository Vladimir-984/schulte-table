import { createAsyncThunk } from '@reduxjs/toolkit'
import { IApplicationAppearance, TypeApplicationAppearance } from 'store/slices/applicationSlice'
import { RootState } from 'store'

import { VKWebAppSetViewSettings } from 'API/bridge'

export const setAppearance = createAsyncThunk<IApplicationAppearance, TypeApplicationAppearance>(
   'application/setAppearance',
   async (type: TypeApplicationAppearance, thunkAPI) => {
      try {
         const appAppearance: IApplicationAppearance = {
            type,
            value: 'light',
         }
         if (type === 'auto') {
            const configValue = (thunkAPI.getState() as RootState).application.config.appearance
            appAppearance.value = configValue
         } else {
            appAppearance.value = type
         }
         VKWebAppSetViewSettings(appAppearance.value)

         return appAppearance
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)

export const getPromoBannerData = createAsyncThunk('application/getPromoBannerData', async (_, thunkAPI) => {
   try {
      const data = ''
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})
