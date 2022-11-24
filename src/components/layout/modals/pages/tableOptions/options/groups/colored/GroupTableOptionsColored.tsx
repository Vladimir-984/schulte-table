import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellTableOptionsAutoChangeColors } from './autoChangeColors/CellTableOptionsAutoChangeColors'
import { useAppSelector } from 'hooks/redux'
import { selectIsShownAdditionalOptions, selectIsShownColoredOptions } from 'store/selectors/tableOptions'
import { CellTableOptionsColoredChangeColorsAfterPress } from './changeColorsAfterPress/CellTableOptionsColoredChangeColorsAfterPress'
import { Separator } from '@vkontakte/vkui'
import { CellTableOptionsColoredColorVariant } from './colorVariant/CellTableOptionsColoredColorVariant'

export const GroupTableOptionsColored: React.FC = () => {
   const isShownColoredOptions = useAppSelector(selectIsShownColoredOptions)
   const isShownAdditionalOptions = useAppSelector(selectIsShownAdditionalOptions)

   if (!isShownColoredOptions || !isShownAdditionalOptions) return null

   return (
      <GroupCard>
         <CellTableOptionsColoredColorVariant />
         <Separator wide />
         <CellTableOptionsColoredChangeColorsAfterPress />
         <Separator wide />
         <CellTableOptionsAutoChangeColors />
      </GroupCard>
   )
}
