import { createAsyncThunk } from '@reduxjs/toolkit'
import { cloneDeep } from 'lodash'
import { RootState } from 'store'
import { defaultTableOptions } from 'store/slices/tableOptions'

export const getTableOptions = createAsyncThunk('tableOptions/get', async (_, thunkAPI) => {
   try {
      //
      return defaultTableOptions
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})

export const applyTableOptions = createAsyncThunk('tableOptions/apply', async (_, thunkAPI) => {
   try {
      const changeableTableOptions = (thunkAPI.getState() as RootState).tableOptions.changeableTableOptions

      return cloneDeep(changeableTableOptions)
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})
