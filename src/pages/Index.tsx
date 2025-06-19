
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PartnersCarousel from '../components/PartnersCarousel';
import BrazilMap from '../components/BrazilMap';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnersCarousel />
      <BrazilMap />
      <Footer />
    </div>
  );
};

export default Index;
