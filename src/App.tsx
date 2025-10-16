
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import HowItWorks from "./pages/HowItWorks";
import Transparency from "./pages/Transparency";
import Feedback from "./pages/Feedback";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Services from "./pages/Services";
import Licensed from "./pages/Licensed";
import SolarPlants from "./pages/SolarPlants";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termos-de-uso" element={<Terms />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/politica-de-privacidade" element={<Privacy />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/politica-de-cookies" element={<Cookies />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/politica-de-transparencia" element={<Transparency />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/depoimentos" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/licenciado" element={<Licensed />} />
          <Route path="/usinas" element={<SolarPlants />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </QueryClientProvider>
);

export default App;
