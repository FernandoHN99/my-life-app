import { Outlet } from 'react-router'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '@/core-components/sidebar/app-sidebar'
export default function LayoutMain() {
   return (
      <SidebarProvider>
         <AppSidebar />
         <div className="flex flex-1 flex-col min-w-0">
            <header className="flex items-center gap-2 border-b border-border px-4 py-2">
               <SidebarTrigger />
            </header>
            <Outlet />
         </div>
      </SidebarProvider>
   )
}
