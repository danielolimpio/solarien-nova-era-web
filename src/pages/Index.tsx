
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PartnersCarousel from '../components/PartnersCarousel';
import SolarPlantsCarousel from '../components/SolarPlantsCarousel';
import BrazilMap from '../components/BrazilMap';
import EntrepreneurshipSection from '../components/EntrepreneurshipSection';
import LicenseSection from '../components/LicenseSection';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Separator } from '../components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <div id="parcerias">
        <PartnersCarousel />
      </div>
      <SolarPlantsCarousel />
      <BrazilMap />
      <div id="licenciado">
        <EntrepreneurshipSection />
      </div>
      <LicenseSection />
      <Separator className="h-1 bg-gradient-to-r from-transparent via-solarien-primary to-transparent opacity-60" />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
