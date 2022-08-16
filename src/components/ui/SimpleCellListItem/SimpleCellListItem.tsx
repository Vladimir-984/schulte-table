import { Icon28DoneOutline } from '@vkontakte/icons'
import { SimpleCell, SimpleCellProps } from '@vkontakte/vkui'
import { BUTTON_ACTIVE_EFFECT_DELAY } from 'constants/constants'
import { IListItem } from 'types/list'

interface ListItemProps<T> extends Omit<SimpleCellProps, 'onClick'> {
   item: IListItem<T>
   selected?: boolean
   onClick?: (value: T) => void
}
export const ListItem = <T extends {}>({
   onClick,
   item,
   selected,
   ...restProps
}: React.PropsWithChildren<ListItemProps<T>>): React.ReactElement<any, any> | null => {
   const onClickItem = () => {
      onClick && onClick(item.value)
   }

   return (
      <SimpleCell
         {...restProps}
         activeEffectDelay={BUTTON_ACTIVE_EFFECT_DELAY}
         after={selected && <Icon28DoneOutline />}
         onClick={onClickItem}
      >
         {item.label}
      </SimpleCell>
   )
}
