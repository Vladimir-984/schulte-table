import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { defaultTableParams } from 'store/slices/tablePramsSlice'

export const getTableParams = createAsyncThunk('tableParams/get', async (_, thunkAPI) => {
   try {
      //
      return defaultTableParams
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})

export const applyTableParams = createAsyncThunk('tableParams/apply', async (_, thunkAPI) => {
   try {
      const tableParams = (thunkAPI.getState() as RootState).tableParams.changeableParams

      return tableParams
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})
