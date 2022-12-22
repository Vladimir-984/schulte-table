import React from 'react'
import { useRouter } from '@happysanta/router'
import { ActionSheet, ActionSheetItem, Title } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectAvailableTableSizes, selectChangeableTableSize } from 'store/selectors/tableOptions'
import { NavProp } from 'types/nav'
import { useAnchorElement, useSetAnchorElement } from '../PopoutContext'
import { ActionSheetCloseItem } from './ActionSheetCloseItem'
import { setTableOptionsSize } from 'store/slices/tableOptions'

import { Icon24DoneOutline } from '@vkontakte/icons'
import { ITableSize } from 'types/table'

export const ActionSheetTableOptionsSize: React.FC<NavProp> = () => {
   const sizes = useAppSelector(selectAvailableTableSizes)
   const changeableSize = useAppSelector(selectChangeableTableSize)

   const element = useAnchorElement()
   const setElement = useSetAnchorElement()

   const dispatch = useAppDispatch()
   const router = useRouter()

   const onClose = () => {
      router.popPageIfPopup()
      setElement(null)
   }

   const onClickSize = (size: ITableSize) => (e: React.MouseEvent) => {
      dispatch(setTableOptionsSize(size))
   }

   const onChangeSize: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      // const v = +e.target.value
      // if (v >= MIN_TABLE_SIZE && v <= MAX_TABLE_SIZE) {
      // dispatch(setTableOptionsSize(v))
      //  onClose()
      // }
   }

   return (
      <ActionSheet
         toggleRef={element}
         iosCloseItem={<ActionSheetCloseItem />}
         onClose={onClose}
         popupDirection='bottom'
         header={
            <Title level='3' weight='1' style={{ color: 'var(--text_primary,var(--vkui--color_text_primary))' }}>
               Размер
            </Title>
         }
         //  popupOffsetDistance={-48}
      >
         {sizes.map((size) => (
            <ActionSheetItem
               selectable
               onChange={onChangeSize}
               checked={changeableSize.value === size.value}
               iconChecked={<Icon24DoneOutline />}
               value={size.value}
               onClick={onClickSize(size)}
               autoclose
               key={size.id}
            >
               {size.title}
            </ActionSheetItem>
         ))}
      </ActionSheet>
   )
}
