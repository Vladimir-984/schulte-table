import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { useAppSelector } from 'hooks/redux'
import { selectIsShownRedBlackOptions } from 'store/selectors/tableOptions'
import { Header } from '@vkontakte/vkui'

import { CellTableOptionsRedBlackRedBlackVariant } from './cells/redBlackVariant/CellTableOptionsRedBlackRedBlackVariant'

export const GroupTableOptionsRedBlack: React.FC = () => {
   const isShownRedBlackOptions = useAppSelector(selectIsShownRedBlackOptions)
   if (!isShownRedBlackOptions) return null

   return (
      <GroupCard header={<Header mode='secondary'>Шульте-Горбова</Header>}>
         <CellTableOptionsRedBlackRedBlackVariant />
      </GroupCard>
   )
}
