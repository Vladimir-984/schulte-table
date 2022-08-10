import { createSlice } from '@reduxjs/toolkit'

interface ITableParamsState {}

const initialState: ITableParamsState = {}

const tableParamsSlice = createSlice({ name: 'tableParams', initialState, reducers: {} })

export const {} = tableParamsSlice.actions

export const tableParamsReducer = tableParamsSlice.reducer
