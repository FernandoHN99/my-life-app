import { LogOut } from 'lucide-react'
import {
   SidebarFooter,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar'

export default function SidebarFooterComponent() {
   return (
      <SidebarFooter>
         <SidebarMenu>
            <SidebarMenuItem>
               <SidebarMenuButton>
                  <LogOut className="h-4 w-4" />
                  <span>Sair</span>
               </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
   )
}
