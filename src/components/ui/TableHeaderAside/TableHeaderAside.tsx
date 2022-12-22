import React from 'react'
import { Icon24RefreshOutline } from '@vkontakte/icons'
import { Button } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { useAppDispatch } from 'hooks/redux'
import { startTable } from 'store/asyncThunks/activeTable'

export const TableHeaderAside: React.FC = () => {
   const dispatch = useAppDispatch()
   const onClickButton = () => {
      dispatch(startTable())
   }
   return (
      <Button
         mode='tertiary'
         appearance='accent'
         className='Button--round Tappable--active-opacity'
         align='center'
         size='l'
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         before={<Icon24RefreshOutline width={28} height={28} />}
         onClick={onClickButton}
      />
   )
}
