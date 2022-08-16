import { createAsyncThunk } from '@reduxjs/toolkit'

export const startTable = createAsyncThunk('table/start', async (_, thunkAPI) => {
   try {
      const s = ''
      return s
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})
