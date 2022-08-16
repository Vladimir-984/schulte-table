import React from 'react'
import { Icon24RefreshOutline } from '@vkontakte/icons'
import { Button } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'

export const TableHeaderAside: React.FC = () => {
   const onClickButton = () => {}
   return (
      <Button
         mode='tertiary'
         appearance='accent'
         className='Button--round Tappable--active-opacity'
         align='center'
         size='m'
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         before={<Icon24RefreshOutline width={24} height={24} />}
         onClick={onClickButton}
      >
         Заново
      </Button>
   )
}
