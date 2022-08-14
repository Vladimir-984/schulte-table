import { configureStore } from '@reduxjs/toolkit'
import { applicationReducer } from './slices/applicationSlice'
import { tableParamsReducer } from './slices/tableParamsSlice'
import { tableSettingsReducer } from './slices/tableSettingsSlice'
import { tableReducer } from './slices/tableSlice'

export const store = configureStore({
   reducer: {
      application: applicationReducer,
      tableParams: tableParamsReducer,
      table: tableReducer,
      tableSettings: tableSettingsReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
