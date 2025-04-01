
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { 
  Newspaper, 
  Bookmark, 
  Users, 
  Clock, 
  FolderArchive, 
  HelpCircle, 
  Settings, 
  User
} from "lucide-react";

const navItems = [
  {
    title: "Bảng Tin",
    href: "/newsfeed",
    icon: <Newspaper className="h-4 w-4 mr-2" />
  },
  {
    title: "Đã Lưu",
    href: "/saved",
    icon: <Bookmark className="h-4 w-4 mr-2" />
  },
  {
    title: "Thành Viên",
    href: "/members",
    icon: <Users className="h-4 w-4 mr-2" />
  },
  {
    title: "Thời Gian Đóng Góp",
    href: "/time-contribution",
    icon: <Clock className="h-4 w-4 mr-2" />
  },
  {
    title: "Tài Nguyên",
    href: "/resources",
    icon: <FolderArchive className="h-4 w-4 mr-2" />
  },
  {
    title: "Hỏi Đáp",
    href: "/qa",
    icon: <HelpCircle className="h-4 w-4 mr-2" />
  },
  {
    title: "Cài Đặt",
    href: "/settings",
    icon: <Settings className="h-4 w-4 mr-2" />
  },
  {
    title: "Hồ Sơ",
    href: "/profile",
    icon: <User className="h-4 w-4 mr-2" />
  }
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Mở menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 sm:max-w-xs">
        <nav className="grid gap-3 px-2 py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 px-2 py-2 text-lg font-semibold border-b pb-4 mb-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-medium">Đội Nhóm NhiLe</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="flex items-center space-x-2 px-2 py-2 text-sm font-medium rounded-md hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
