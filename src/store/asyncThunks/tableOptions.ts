import { createAsyncThunk } from '@reduxjs/toolkit'
import { cloneDeep } from 'lodash'
import { RootState } from 'store'
import { defaultTableOptions } from 'store/slices/tableOptions'
import { ITableCellShape, ITableHintStyle } from 'types/table'

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

//hints
export const setHintsTableOptionsIsEnabled = createAsyncThunk<boolean, boolean>(
   'tableOptions/setIsEnabledHints',
   async (isEnabledHints, thunkAPI) => {
      try {
         return isEnabledHints
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)
export const setHintsTableOptionsStyle = createAsyncThunk<ITableHintStyle, ITableHintStyle>(
   'tableOptions/setStyleHints',
   async (styleHints, thunkAPI) => {
      try {
         return styleHints
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)
export const setHintsTableOptionsTimeout = createAsyncThunk<number, number>(
   'tableOptions/setTimeoutHints',
   async (timeoutHints, thunkAPI) => {
      try {
         return timeoutHints
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)
//

//display
export const setDisplayTableOptionsIsShowTime = createAsyncThunk<boolean, boolean>(
   'tableOptions/setIsShowTime',
   async (isShowTime, thunkAPI) => {
      try {
         return isShowTime
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)
export const setDisplayTableOptionsCellsShape = createAsyncThunk<ITableCellShape, ITableCellShape>(
   'tableOptions/setCellsShape',
   async (cellsShape, thunkAPI) => {
      try {
         return cellsShape
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)
export const setDisplayTableOptionsIsEnabledShadow = createAsyncThunk<boolean, boolean>(
   'tableOptions/setIsEnabledShadow',
   async (isEnabledShadow, thunkAPI) => {
      try {
         return isEnabledShadow
      } catch (e) {
         return thunkAPI.rejectWithValue(e)
      }
   }
)
//
