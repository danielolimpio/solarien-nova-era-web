
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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
import ServiceDetail from "./pages/ServiceDetail";
import Licensed from "./pages/Licensed";
import Signup from "./pages/Signup";
import SolarPlants from "./pages/SolarPlants";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";



const App = () => (
  <BrowserRouter>
    <ScrollToTop />
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
      <Route path="/servicos/:slug" element={<ServiceDetail />} />
      <Route path="/licenciado" element={<Licensed />} />
      <Route path="/cadastro" element={<Signup />} />
      <Route path="/usinas" element={<SolarPlants />} />
      <Route path="/sitemap" element={<Sitemap />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <CookieConsent />
  </BrowserRouter>
);


export default App;
