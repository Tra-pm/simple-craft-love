
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
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
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Newsfeed",
    href: "/newsfeed",
    icon: <Newspaper className="h-4 w-4 mr-2" />
  },
  {
    title: "Saved",
    href: "/saved",
    icon: <Bookmark className="h-4 w-4 mr-2" />
  },
  {
    title: "Members",
    href: "/members",
    icon: <Users className="h-4 w-4 mr-2" />
  },
  {
    title: "Time Contribution",
    href: "/time-contribution",
    icon: <Clock className="h-4 w-4 mr-2" />
  },
  {
    title: "Resources",
    href: "/resources",
    icon: <FolderArchive className="h-4 w-4 mr-2" />
  },
  {
    title: "Q&A",
    href: "/qa",
    icon: <HelpCircle className="h-4 w-4 mr-2" />
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="h-4 w-4 mr-2" />
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <User className="h-4 w-4 mr-2" />
  }
];

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink 
              asChild
              className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <Link to={item.href} className="flex items-center">
                {item.icon}
                {item.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
