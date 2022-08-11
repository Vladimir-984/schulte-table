import { createAsyncThunk } from '@reduxjs/toolkit'
export const getHintsSettings = createAsyncThunk('hintsSettings/get', async (_, thunkAPI) => {
   try {
      const s = ''
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})
