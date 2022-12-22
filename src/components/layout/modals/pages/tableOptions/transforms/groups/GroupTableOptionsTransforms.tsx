import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'

import { List, Separator, SimpleCell, Switch } from '@vkontakte/vkui'
import {
   // useAppDispatch,
   useAppSelector,
} from 'hooks/redux'
import {
   // selectChangeableTableTransforms,
   selectDataTableTransforms,
} from 'store/selectors/tableOptions'
// import { setTableTransformOption } from 'store/slices/tableOptions'
import { isAddSeparator } from 'utils/list'

export const GroupTableOptionsTransforms: React.FC = () => {
   return (
      <GroupCard>
         <ListTransforms />
      </GroupCard>
   )
}

const ListTransforms: React.FC = () => {
   // const dispatch = useAppDispatch()
   const dataTableTransforms = useAppSelector(selectDataTableTransforms)

   // const tableTransforms = useAppSelector(selectChangeableTableTransforms)

   const onChangeTransform: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      // const { name, checked } = e.target
      // dispatch(setTableTransformOption({ name, checked }))
   }

   return (
      <List>
         {dataTableTransforms.map((transform, idx) => (
            <React.Fragment key={transform.id}>
               <SimpleCell
                  disabled
                  after={
                     <Switch
                        // checked={tableTransforms[transform.value]}
                        name={transform.value}
                        onChange={onChangeTransform}
                     />
                  }
               >
                  {transform.title}
               </SimpleCell>
               {isAddSeparator(dataTableTransforms, idx) && <Separator wide />}
            </React.Fragment>
         ))}
      </List>
   )
}
