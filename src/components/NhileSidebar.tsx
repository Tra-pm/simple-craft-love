
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { 
  Newspaper, 
  Bookmark, 
  Users, 
  Clock, 
  FolderArchive, 
  HelpCircle,
  Home, 
  Bell
} from "lucide-react";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/"
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications"
  },
  {
    title: "Newsfeed",
    icon: Newspaper,
    href: "/newsfeed"
  },
  {
    title: "Saved Items",
    icon: Bookmark,
    href: "/saved"
  },
  {
    title: "Team Members",
    icon: Users,
    href: "/members"
  },
  {
    title: "Time Tracking",
    icon: Clock,
    href: "/time-contribution"
  },
  {
    title: "Resources",
    icon: FolderArchive,
    href: "/resources"
  },
  {
    title: "Q&A Portal",
    icon: HelpCircle,
    href: "/qa"
  }
];

export function NhileSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-2">
        <h3 className="text-lg font-semibold">Quick Access</h3>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.href}>
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
