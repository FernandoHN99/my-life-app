import { HeartPulse, Home } from 'lucide-react'
import { NavLink, useLocation } from 'react-router'
import {
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar'

const menuItems = [
   {
      title: 'Home',
      url: '/',
      icon: Home,
   },
   {
      title: 'Health',
      url: '/health',
      icon: HeartPulse,
   },
]

export default function SidebarContentComponent() {
   const location = useLocation()

   return (
      <SidebarContent>
         <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
               <SidebarMenu>
                  {menuItems.map((item) => (
                     <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                           asChild
                           isActive={location.pathname === item.url}
                        >
                           <NavLink to={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                           </NavLink>
                        </SidebarMenuButton>
                     </SidebarMenuItem>
                  ))}
               </SidebarMenu>
            </SidebarGroupContent>
         </SidebarGroup>
      </SidebarContent>
   )
}
