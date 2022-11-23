import { configureStore } from '@reduxjs/toolkit'
import { applicationReducer } from './slices/applicationSlice'
import { tableOptionsReducer } from './slices/tableOptions'
import { tableSettingsReducer } from './slices/tableSettingsSlice'
import { tableReducer } from './slices/tableSlice'

export const store = configureStore({
   reducer: {
      application: applicationReducer,
      tableOptions: tableOptionsReducer,
      table: tableReducer,
      tableSettings: tableSettingsReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
