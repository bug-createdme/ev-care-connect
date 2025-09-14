import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CustomerDashboard from "./pages/CustomerDashboard";
import BookingPage from "./pages/customer/BookingPage";
import VehiclesPage from "./pages/customer/VehiclesPage";
import HistoryPage from "./pages/customer/HistoryPage";
import ProfilePage from "./pages/customer/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/customer/booking" element={<BookingPage />} />
          <Route path="/customer/vehicles" element={<VehiclesPage />} />
          <Route path="/customer/history" element={<HistoryPage />} />
          <Route path="/customer/profile" element={<ProfilePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
