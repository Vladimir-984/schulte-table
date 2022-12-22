import React from 'react'
import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui'
import { NavProp } from 'types/nav'
import { useRouter } from '@happysanta/router'
import { useAnchorElement } from '../PopoutContext'
import { ActionSheetCloseItem } from './ActionSheetCloseItem'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableStyleSelected, selectDataTableStylesSelected } from 'store/selectors/tableOptions'
import { setTableOptionsStyleSelected } from 'store/slices/tableOptions'
import { ITableStyleSelected } from 'types/table'
import { Icon24DoneOutline } from '@vkontakte/icons'

export const ActionSheetTableOptionsStylesSelected: React.FC<NavProp> = () => {
   const router = useRouter()
   const dispatch = useAppDispatch()
   const anchorElement = useAnchorElement()

   const changeableStyleSelected = useAppSelector(selectChangeableTableStyleSelected)
   const dataStylesSelected = useAppSelector(selectDataTableStylesSelected)

   const onClose = () => router.popPageIfPopup()

   const onClickStyleSelected = (styleSelected: ITableStyleSelected) => () => {
      dispatch(setTableOptionsStyleSelected(styleSelected))
   }

   const onChangeStyleSelected: React.ChangeEventHandler<HTMLInputElement> = (e) => {}

   return (
      <ActionSheet toggleRef={anchorElement} onClose={onClose} iosCloseItem={<ActionSheetCloseItem />}>
         {dataStylesSelected.map((styleSelected) => (
            <ActionSheetItem
               selectable
               onChange={onChangeStyleSelected}
               checked={changeableStyleSelected.value === styleSelected.value}
               iconChecked={<Icon24DoneOutline />}
               value={styleSelected.value}
               onClick={onClickStyleSelected(styleSelected)}
               autoclose
               key={styleSelected.id}
            >
               {styleSelected.title}
            </ActionSheetItem>
         ))}
      </ActionSheet>
   )
}
