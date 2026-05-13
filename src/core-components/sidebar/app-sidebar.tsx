import { Sidebar } from '@/components/ui/sidebar'
import SidebarContentComponent from './sidebar-content'
import SidebarFooterComponent from './sidebar-footer'
import SidebarHeaderComponent from './sidebar-header'

function AppSidebar() {
   return (
      <Sidebar>
         <SidebarHeaderComponent />
         <SidebarContentComponent />
         <SidebarFooterComponent />
      </Sidebar>
   )
}

export default AppSidebar
