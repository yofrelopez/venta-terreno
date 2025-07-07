import ContactForm from "./components/ContactForm";
import CTASection from "./components/CTASection";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import PropertyDetails from './components/PropertyDetails';


export const metadata = {
  title: "Venta de Terreno Urbano en Barranca | BCA Publicidad",
  description: "Terreno urbano habilitado en la provincia de Barranca. Inversión segura con documentación en regla. Contáctanos ahora.",
  openGraph: {
    title: "Terreno Urbano en Venta en Barranca",
    description: "Oportunidad única de inversión. Terreno habilitado con acceso a vías principales.",
    url: "https://venta-terreno.vercel.app",
    siteName: "BCA Publicidad",
    images: [
      {
        url: "https://venta-terreno.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terreno Urbano en Venta en Barranca"
      }
    ],
    locale: "es_PE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Terreno Urbano en Venta en Barranca",
    description: "Inversión segura con toda la documentación lista.",
    images: ["https://venta-terreno.vercel.app/og-image.png"]
  }
};



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
