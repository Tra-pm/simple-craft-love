
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newsfeed" element={<HomePage />} />
          <Route path="/saved" element={<HomePage />} />
          <Route path="/members" element={<HomePage />} />
          <Route path="/time-contribution" element={<HomePage />} />
          <Route path="/resources" element={<HomePage />} />
          <Route path="/qa" element={<HomePage />} />
          <Route path="/settings" element={<HomePage />} />
          <Route path="/profile" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
