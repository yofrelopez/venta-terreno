import ContactForm from "./components/ContactForm";
import CTASection from "./components/CTASection";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import PropertyDetails from './components/PropertyDetails';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Gallery />
      <PropertyDetails />
      <MapSection />
      <CTASection />
      <ContactForm />
    </main>
  );
}
