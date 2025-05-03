import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AiBuilderSection from './components/AiBuilderSection';
import TemplatesSection from './components/TemplatesSection';
import CustomizeSection from './components/CustomizeSection';
import BusinessFeaturesSection from './components/BusinessFeaturesSection';
import DomainSection from './components/DomainSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <AiBuilderSection />
        <TemplatesSection />
        <CustomizeSection />
        <BusinessFeaturesSection />
        <DomainSection />
      </main>
      <Footer />
    </div>
  );
}
