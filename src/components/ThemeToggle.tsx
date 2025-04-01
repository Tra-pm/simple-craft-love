
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 text-craft-terracotta transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-craft-sage transition-all duration-300" />
      )}
      <span className="sr-only">Chuyển đổi giao diện</span>
    </Button>
  );
}
