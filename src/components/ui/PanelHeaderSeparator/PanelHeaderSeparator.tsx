import React from 'react'
import { FixedLayout, PanelHeader, PanelHeaderProps, Separator } from '@vkontakte/vkui'
import { useAdaptivityIsDesktop } from '@vkontakte/vkui/dist/hooks/useAdaptivity'

export const PanelHeaderSeparator: React.FC<PanelHeaderProps> = (panelHeaderProps) => {
   const isDesktop = useAdaptivityIsDesktop()

   return (
      <>
         <PanelHeader separator={isDesktop} {...panelHeaderProps}></PanelHeader>
         {!isDesktop && (
            <FixedLayout vertical='top'>
               <Separator wide />
            </FixedLayout>
         )}
      </>
   )
}
