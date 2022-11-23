import React from 'react'
import { useRouter } from '@happysanta/router'
import { Avatar, Group, Panel, PanelHeaderBack, PanelProps } from '@vkontakte/vkui'

import { TableView } from 'components/ui/TableView/TableView'
import {} from 'utils/vkui'

import { PanelHeaderSeparator } from 'components/ui/PanelHeaderSeparator/PanelHeaderSeparator'
import { TableHeader } from 'components/ui/TableHeader/TableHeader'
import {} from 'components/ui/VisibilityHidden/VisibilityHidden'
import { useAppSelector } from 'hooks/redux'
import { TableCellContent } from 'components/ui/TableCellContent/TableCellContent'

export const PanelTable: React.FC<PanelProps> = (panelProps) => {
   const router = useRouter()

   const onClickBack = () => {
      router.popPage()
   }
   return (
      <Panel {...panelProps} className='Panel--no-tabbar'>
         <PanelHeaderSeparator before={<PanelHeaderBack onClick={onClickBack} />}>Таблица</PanelHeaderSeparator>

         <Group separator='hide' className='Group--full-height'>
            <TableHeader />
            <TableNextValue />
            <TableView />
         </Group>
         {/*  <VisibilityHidden>
            <PromoBanner bannerData={defaultPromoBannerData} onClose={() => {}} />
         </VisibilityHidden>
         <FixedLayout vertical='bottom'>
            <PromoBanner bannerData={defaultPromoBannerData} onClose={() => {}} />
         </FixedLayout> */}
      </Panel>
   )
}

export const TableNextValue = () => {
   const nextSequenceCell = useAppSelector((state) => state.table.active.nextSequenceCell)
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            pointerEvents: 'none',
            right: 0,
            left: 0,
         }}
      >
         <Avatar size={48} mode='image'>
            {nextSequenceCell !== null && <TableCellContent {...nextSequenceCell} />}
         </Avatar>
      </div>
   )
}
