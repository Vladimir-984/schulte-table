import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'store'

export const startTable = createAsyncThunk('table/start', async (_, thunkAPI) => {
   try {
      const state = thunkAPI.getState() as RootState

      return state
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})

export const onClickTableCell = createAsyncThunk('table/clickCell', async (id: string, thunkAPI) => {
   try {
      const state = (thunkAPI.getState() as RootState).table.options
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})
