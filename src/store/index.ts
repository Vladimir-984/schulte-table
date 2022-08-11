import { configureStore } from '@reduxjs/toolkit'
import { applicationReducer } from './slices/applicationSlice'
import { hintsSettingsReducer } from './slices/hintsSettingsSlice'
import { tableParamsReducer } from './slices/tablePramsSlice'
import { tableReducer } from './slices/tableSlice'

export const store = configureStore({
   reducer: {
      application: applicationReducer,
      tableParams: tableParamsReducer,
      table: tableReducer,
      hintsSettings: hintsSettingsReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
