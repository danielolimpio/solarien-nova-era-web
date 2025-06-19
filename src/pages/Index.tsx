
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PartnersCarousel from '../components/PartnersCarousel';
import SolarPlantsCarousel from '../components/SolarPlantsCarousel';
import BrazilMap from '../components/BrazilMap';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PartnersCarousel />
      <SolarPlantsCarousel />
      <BrazilMap />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
