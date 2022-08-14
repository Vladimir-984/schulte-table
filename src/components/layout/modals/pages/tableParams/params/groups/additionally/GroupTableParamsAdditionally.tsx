import React from 'react'
import { Header, Separator } from '@vkontakte/vkui'

import { TableVariant } from 'types/table'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellTableParamsAdditionallySize } from './cells/CellTableParamsAdditionallySize'
import { CellTableParamsAdditionallySequence } from './cells/CellTableParamsAdditionallySequence'
import { useAppSelector } from 'hooks/redux'
import { selectShownOtherParams } from 'store/selectors/tableParams'
import { TABLE_VARIANT } from 'lists'

export const GroupTableParamsAdditionally: React.FC = () => {
   const shownOtherParams = useAppSelector(selectShownOtherParams)
   if (!shownOtherParams) return null
   return (
      <GroupCard
         header={<Header mode='secondary'>Дополнительно</Header>}
         description={`Изменение порядка недоступно для варианта - "${TABLE_VARIANT[TableVariant.GORBOV]}"`}
      >
         <CellTableParamsAdditionallySize />
         <Separator wide />
         <CellTableParamsAdditionallySequence />
      </GroupCard>
   )
}
