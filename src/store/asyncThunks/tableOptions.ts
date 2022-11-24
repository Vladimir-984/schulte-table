import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { defaultMainTableOptions } from 'store/slices/tableOptions'

export const getTableOptions = createAsyncThunk('tableOptions/get', async (_, thunkAPI) => {
   try {
      //
      return defaultMainTableOptions
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})

export const applyTableOptions = createAsyncThunk('tableOptions/apply', async (_, thunkAPI) => {
   try {
      const mainTableOptions = (thunkAPI.getState() as RootState).tableOptions.changeableMainTableOptions
      const additionalTableOptions = (thunkAPI.getState() as RootState).tableOptions.changeableAdditionalTableOptions
      const coloredTableOptions = (thunkAPI.getState() as RootState).tableOptions.changeableColoredTableOptions

      return { main: mainTableOptions, additional: additionalTableOptions, colored: coloredTableOptions }
   } catch (e) {
      return thunkAPI.rejectWithValue(e)
   }
})
