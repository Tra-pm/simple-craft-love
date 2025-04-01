
import Header from "./Header";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/hooks/use-theme";

interface NhileLayoutProps {
  children: React.ReactNode;
}

export function NhileLayout({ children }: NhileLayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col w-full bg-background">
        <Header />
        <main className="flex-1 overflow-auto p-6 container mx-auto">
          {children}
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
