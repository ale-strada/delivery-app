import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MotoGallery from "@/components/MotoGallery";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Catalog from "@/components/Catalog";
import Simulator from "@/components/Simulator";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MotoGallery />
      <Stats />
      <HowItWorks />
      <Catalog />
      <Simulator />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
