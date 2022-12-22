import React from 'react'
import { SimpleCell, Title } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useRouter } from '@happysanta/router'
import { MODAL_PAGES } from 'router/modals'
// import { useAppSelector } from 'hooks/redux'
// import { selectChangeableTableTransforms } from 'store/selectors/tableOptions'

export const CellTableOptionsTransforms: React.FC = () => {
   const router = useRouter()

   const onClickTransform = () => {
      router.pushModal(MODAL_PAGES.TABLE_TRANSFORMS)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         expandable
         after={<AfterTableOptionsTransforms />}
         onClick={onClickTransform}
      >
         Трансформации
      </SimpleCell>
   )
}

const AfterTableOptionsTransforms: React.FC = () => {
   // const tableTransforms = useAppSelector(selectChangeableTableTransforms)
   const isActive = true // Object.values(tableTransforms).some((v) => v)
   return (
      <Title weight='2' level='3'>
         {isActive ? 'Включены' : 'Выключены'}
      </Title>
   )
}
