import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import StoryPage from "./pages/StoryPage.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PolicyPage from "./pages/PolicyPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PolicyPage slug="privacy" />} />
          <Route path="/terms" element={<PolicyPage slug="terms" />} />
          <Route path="/cookies" element={<PolicyPage slug="cookies" />} />
          <Route path="/refund" element={<PolicyPage slug="refund" />} />
          <Route path="/nda" element={<PolicyPage slug="nda" />} />
          <Route path="/msa" element={<PolicyPage slug="msa" />} />
          <Route path="/security" element={<PolicyPage slug="security" />} />
          <Route path="/sla" element={<PolicyPage slug="sla" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
