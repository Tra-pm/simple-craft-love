
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
    title: "Trang Chủ",
    icon: Home,
    href: "/"
  },
  {
    title: "Thông Báo",
    icon: Bell,
    href: "/notifications"
  },
  {
    title: "Bảng Tin",
    icon: Newspaper,
    href: "/newsfeed"
  },
  {
    title: "Đã Lưu",
    icon: Bookmark,
    href: "/saved"
  },
  {
    title: "Thành Viên",
    icon: Users,
    href: "/members"
  },
  {
    title: "Thời Gian Đóng Góp",
    icon: Clock,
    href: "/time-contribution"
  },
  {
    title: "Tài Nguyên",
    icon: FolderArchive,
    href: "/resources"
  },
  {
    title: "Hỏi Đáp",
    icon: HelpCircle,
    href: "/qa"
  }
];

export function NhileSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-2">
        <h3 className="text-lg font-semibold">Truy Cập Nhanh</h3>
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
