import { PersonStanding } from 'lucide-react'
import { SidebarHeader } from '@/components/ui/sidebar'

export default function SidebarHeaderComponent() {
   return (
      <SidebarHeader>
         <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
               <PersonStanding className="size-4" />
            </div>
            <span className="font-semibold tracking-wide text-sidebar-foreground">
               My Life App
            </span>
         </div>
      </SidebarHeader>
   )
}
