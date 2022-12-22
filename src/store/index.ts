import { configureStore } from '@reduxjs/toolkit'
import { activeTableReducer } from './slices/activeTableSlice'
import { applicationReducer } from './slices/applicationSlice'
import { tableOptionsReducer } from './slices/tableOptions'

export const store = configureStore({
   reducer: {
      application: applicationReducer,
      tableOptions: tableOptionsReducer,
      activeTable: activeTableReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
