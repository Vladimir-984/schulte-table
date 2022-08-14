import React from 'react'
import { GroupCard } from 'components/ui/GroupCard/GroupCard'
import { CellSettings } from './cells/CellSettings'

export const GroupOptionsSettings: React.FC = () => {
   return (
      <GroupCard>
         <CellSettings />
      </GroupCard>
   )
}
