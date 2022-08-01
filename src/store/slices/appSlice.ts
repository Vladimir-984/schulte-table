import { createSlice } from '@reduxjs/toolkit'
import { TableCell, ISettingsCells, TableColor } from 'types/table'

interface IState {
   settingsCells: ISettingsCells
}

const initialState: IState = {
   settingsCells: {
      colorCell: TableColor.DEFAULT,
      colorSymdol: TableColor.DEFAULT,
      typeCell: TableCell.RECT,
      markSelectedCells: true,
      showErrors: true,
   },
}

const appSlice = createSlice({ name: 'app', initialState, reducers: {} })

export const {} = appSlice.actions

export const appReducer = appSlice.reducer
