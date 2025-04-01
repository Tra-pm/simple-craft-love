
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { NhileSidebar } from "./NhileSidebar";
import Header from "./Header";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/hooks/use-theme";

interface NhileLayoutProps {
  children: React.ReactNode;
}

export function NhileLayout({ children }: NhileLayoutProps) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <NhileSidebar />
          <SidebarInset className="flex flex-col">
            <Header />
            <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
          </SidebarInset>
          <Toaster />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
