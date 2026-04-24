import { buildMetadata } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import BenefitsStrip from "@/components/BenefitsStrip";
import CategoriesSection from "@/components/CategoriesSection";
import FleetPreview from "@/components/FleetPreview";
import WhyRentivo from "@/components/WhyRentivo";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export const metadata = buildMetadata({
  title: "Početna",
  description: "Rentivo Rent a Car Novi Sad – Iznajmite vozilo brzo i pouzdano. Brza rezervacija, dostava na adresu.",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsStrip />
      <CategoriesSection />
      <FleetPreview />
      <WhyRentivo />
      <Testimonials />
      <ContactSection />
    </>
  );
}
