import { Outlet } from 'react-router'
import AppSidebar from '@/core-components/sidebar/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
export default function LayoutMain() {
   return (
      <SidebarProvider>
         <AppSidebar />
         <SidebarTrigger />
         <Outlet />
      </SidebarProvider>
   )
}
