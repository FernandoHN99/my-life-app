import { PersonStanding } from 'lucide-react'
import { SidebarHeader } from '@/components/ui/sidebar'

export default function SidebarHeaderComponent() {
   return (
      <SidebarHeader>
         <div className="flex items-center gap-2 px-4 py-2">
            <i>
               <PersonStanding />
            </i>
            <span className="font-bold">My Life App</span>
         </div>
      </SidebarHeader>
   )
}
