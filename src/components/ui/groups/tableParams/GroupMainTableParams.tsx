import React from 'react'
import { Group, Header } from '@vkontakte/vkui'
import { useRouter } from '@happysanta/router'
import { useAppSelector } from 'hooks/redux'

export const GroupMainTableParams: React.FC = () => {
   const router = useRouter()
   const s = useAppSelector((state) => state.tableParams)

   const onClickTableType = () => {}
   const onClickTableVariant = () => {}
   const onClickTableMode = () => {}
   return <Group mode='plain' separator='hide' header={<Header mode='secondary'>Основные</Header>}></Group>
}
