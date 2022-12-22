import React from 'react'
import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui'
import { NavProp } from 'types/nav'
import { useRouter } from '@happysanta/router'
import { useAnchorElement } from '../PopoutContext'
import { ActionSheetCloseItem } from './ActionSheetCloseItem'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { selectChangeableTableDirectionSequence, selectDataTableDirectionSequences } from 'store/selectors/tableOptions'
import { setTableOptionsDirectionSequence } from 'store/slices/tableOptions'
import { ITableSequence } from 'types/table'
import { Icon24DoneOutline } from '@vkontakte/icons'

export const ActionSheetTableOptionsSequence: React.FC<NavProp> = () => {
   const router = useRouter()
   const dispatch = useAppDispatch()
   const anchorElement = useAnchorElement()

   const changeableDirectionSequence = useAppSelector(selectChangeableTableDirectionSequence)
   const dataDirectionSequences = useAppSelector(selectDataTableDirectionSequences)
   const onClose = () => router.popPageIfPopup()

   const onClickDirectionSequence = (directionSequence: ITableSequence) => () => {
      dispatch(setTableOptionsDirectionSequence(directionSequence))
   }

   const onChangeDirectionSequence: React.ChangeEventHandler<HTMLInputElement> = (e) => {}

   return (
      <ActionSheet toggleRef={anchorElement} onClose={onClose} iosCloseItem={<ActionSheetCloseItem />}>
         {dataDirectionSequences.map((directionSequence) => (
            <ActionSheetItem
               selectable
               onChange={onChangeDirectionSequence}
               checked={changeableDirectionSequence.value === directionSequence.value}
               iconChecked={<Icon24DoneOutline />}
               value={directionSequence.value}
               onClick={onClickDirectionSequence(directionSequence)}
               autoclose
               key={directionSequence.id}
            >
               {directionSequence.title}
            </ActionSheetItem>
         ))}
      </ActionSheet>
   )
}
