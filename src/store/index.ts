import { configureStore } from '@reduxjs/toolkit'
import { applicationReducer } from './slices/applicationSlice'
import { tableParamsReducer } from './slices/tablePramsSlice'

export const store = configureStore({
   reducer: { application: applicationReducer, tableParams: tableParamsReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
