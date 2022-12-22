import React from 'react'
import { Switch } from '@vkontakte/vkui'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setTableOptionsIsUpdateColorsAfterSelect } from 'store/slices/tableOptions'
import {
   selectChangeableTableIsUpdateColorsAfterSelect,
   selectIsDisabledChangeUpdateColorsAfterSelect,
} from 'store/selectors/tableOptions'

export const SwitchTableOptionsUpdateColorsAfterSelect: React.FC = () => {
   const dispatch = useAppDispatch()
   const isUpdateColorsAfterSelect = useAppSelector(selectChangeableTableIsUpdateColorsAfterSelect)
   const isDisabledChangeUpdateColorsAfterSelect = useAppSelector(selectIsDisabledChangeUpdateColorsAfterSelect)

   const onChangeIsUpdateColorsAfterSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      dispatch(setTableOptionsIsUpdateColorsAfterSelect(e.target.checked))
   }

   return (
      <Switch
         disabled={isDisabledChangeUpdateColorsAfterSelect}
         checked={isUpdateColorsAfterSelect}
         onChange={onChangeIsUpdateColorsAfterSelect}
      />
   )
}
