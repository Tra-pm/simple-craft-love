
import { Link } from "react-router-dom";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-b-lg shadow-sm">
      <div className="container flex h-16 items-center">
        <Link to="/" className="font-medium flex items-center group mr-6">
          <Heart className="h-5 w-5 mr-2 text-craft-terracotta group-hover:animate-heart-beat" />
          <span className="font-semibold text-lg bg-gradient-to-r from-craft-terracotta to-craft-clay bg-clip-text text-transparent">Đội Nhóm NhiLe</span>
        </Link>
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
