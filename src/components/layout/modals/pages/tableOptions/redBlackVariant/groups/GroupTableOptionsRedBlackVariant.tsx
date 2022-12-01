import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

import { Separator, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setRedBlackTableOptionsVariant } from 'store/slices/tableOptions'
import { selectChangeableTableRedBlackVariant, selectDataTableRedBlackVariants } from 'store/selectors/tableOptions'
import { ITableRedBlackVariant } from 'types/table'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { isAddSeparator } from 'utils/list'

export const GroupTableOptionsRedBlackVariant: React.FC = () => {
   const dispatch = useAppDispatch()
   const redBlackVariant = useAppSelector(selectChangeableTableRedBlackVariant)
   const dataRedBlackVariants = useAppSelector(selectDataTableRedBlackVariants)

   const onClickRedBlackVariant = (_redBlackVariant: ITableRedBlackVariant) => () => {
      dispatch(setRedBlackTableOptionsVariant(_redBlackVariant))
   }
   return (
      <GroupCard>
         {dataRedBlackVariants.map((redBlackVariantItem, idx, items) => (
            <React.Fragment key={redBlackVariantItem.id}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={redBlackVariantItem.id === redBlackVariant.id && <Icon28DoneOutline />}
                  onClick={onClickRedBlackVariant(redBlackVariantItem)}
               >
                  {redBlackVariantItem.title}
               </SimpleCell>
               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </GroupCard>
   )
}
