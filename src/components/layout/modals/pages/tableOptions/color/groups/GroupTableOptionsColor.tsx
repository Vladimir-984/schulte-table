import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

import { Separator, SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { Icon28DoneOutline } from '@vkontakte/icons'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'hooks/redux'
import { selectChangeableTableColorVariant, selectDataTableColorVariants } from 'store/selectors/tableOptions'
import { ITableColorVariant } from 'types/table'
import { setColoredTableOptionsColorVariant } from 'store/slices/tableOptions'
import { isAddSeparator } from 'utils/list'

export const GroupTableOptionsColor: React.FC = () => {
   const dispatch = useDispatch()
   const dataColorVariants = useAppSelector(selectDataTableColorVariants)
   const colorVariant = useAppSelector(selectChangeableTableColorVariant)

   const onClickTableColor = (colorId: ITableColorVariant['id']) => () => {
      dispatch(setColoredTableOptionsColorVariant(colorId))
   }

   return (
      <GroupCard>
         {dataColorVariants.map((colorVariantItem, idx, items) => (
            <React.Fragment key={colorVariantItem.id}>
               <SimpleCell
                  activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
                  after={colorVariant.id === colorVariantItem.id && <Icon28DoneOutline />}
                  onClick={onClickTableColor(colorVariantItem.id)}
               >
                  {colorVariantItem.title}
               </SimpleCell>
               {isAddSeparator(items, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </GroupCard>
   )
}
