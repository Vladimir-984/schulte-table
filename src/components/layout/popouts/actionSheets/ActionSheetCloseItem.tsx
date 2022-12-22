import React from 'react'
import { ActionSheetItem } from '@vkontakte/vkui'

export const ActionSheetCloseItem: React.FC = () => {
   return (
      <ActionSheetItem mode='cancel' autoclose>
         Отмена
      </ActionSheetItem>
   )
}
