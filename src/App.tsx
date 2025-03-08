
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Health from "./pages/Health";
import SocialAids from "./pages/SocialAids";
import Loans from "./pages/Loans";
import Accidents from "./pages/Accidents";
import Pilgrimage from "./pages/Pilgrimage";
import Recreation from "./pages/Recreation";
import Activities from "./pages/Activities";
import Dining from "./pages/Dining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/housing" element={<NotFound />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/scholarships" element={<SocialAids />} />
          <Route path="/health" element={<Health />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/services" element={<NotFound />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/accidents" element={<Accidents />} />
          <Route path="/pilgrimage" element={<Pilgrimage />} />
          <Route path="/recreation" element={<Recreation />} />
          <Route path="/special-services" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          <Route path="/sitemap" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
