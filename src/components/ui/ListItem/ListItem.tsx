import { Icon28DoneOutline } from '@vkontakte/icons'
import { SimpleCell } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { IListItem } from 'types/list'

interface ListItemProps<T> {
   item: IListItem<T>
   selected?: boolean
   onClick?: (value: T) => void
}
export const ListItem = <T extends {}>(
   props: React.PropsWithChildren<ListItemProps<T>>
): React.ReactElement<any, any> | null => {
   const onClickItem = () => {
      props.onClick && props.onClick(props.item.value)
   }

   return (
      <SimpleCell
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={props.selected && <Icon28DoneOutline />}
         onClick={onClickItem}
      >
         {props.item.label}
      </SimpleCell>
   )
}
