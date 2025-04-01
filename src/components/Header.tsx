
import { Link } from "react-router-dom";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center mr-4">
          <SidebarTrigger className="mr-2" />
          <Link to="/" className="font-medium flex items-center">
            <span className="font-semibold text-lg">NhiLe Team</span>
          </Link>
        </div>
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
