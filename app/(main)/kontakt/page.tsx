import { buildMetadata } from "@/lib/metadata";
import ContactSection from "@/components/ContactSection";

export const metadata = buildMetadata({ title: "Kontakt" });

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-[#0d0d14]">
      <div className="bg-[#0a0a0f] border-b border-[#404880] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Kontakt</h1>
          <p className="text-[#94a3b8]">Dostupni smo za rezervacije i sva vaša pitanja.</p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
