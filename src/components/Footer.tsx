
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-craft-beige py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center text-sm text-craft-brown">
          Made with <Heart className="mx-1 h-4 w-4 fill-craft-terracotta text-craft-terracotta" /> for the crafting community
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} SimpleCraft. All tutorials are for educational purposes.
        </p>
      </div>
    </footer>
  );
}
