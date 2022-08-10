import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { applicationReducer } from './slices/applicationSlice'
import { tableParamsReducer } from './slices/tablePramsSlice'

export const store = configureStore({
   reducer: { application: applicationReducer, tableParams: tableParamsReducer },
=======
import { appReducer } from './slices/appSlice'

export const store = configureStore({
   reducer: appReducer,
>>>>>>> 9883f9bb75e478a8b88a625d50a2fee7fbf368e4
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
