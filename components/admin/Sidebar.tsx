import { Box, Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/admin/overview",
    icon: Home,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: Box,
  },
  {
    title: "Sales",
    url: "/admin/sales",
    icon: Inbox,
  },
  {
    title: "Orders",
    url: "/admin/orders",
    icon: Calendar,
  },

  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-[330px]">
      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-bold tracking-wider text-white p-2 my-3">
            ESTORE
          </SidebarGroupLabel>

          <Separator className="mb-4 mt-1" />
          <SidebarGroupContent>
            <SidebarMenu>
              <p className="text-[14px] mb-2 px-2 text-muted-foreground">
                Dashboard
              </p>
              {items.map((item) => (
                <SidebarMenuItem className="px-2" key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="py-6 text-[16px] text-white ">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
