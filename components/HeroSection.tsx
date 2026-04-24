import Image from "next/image";
import Link from "next/link";
import { CONTACT_PHONE_HREF, CONTACT_PHONE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="flex flex-col h-[calc(100vh-5rem)] border-b border-[#404880] lg:relative lg:overflow-hidden lg:min-h-[calc(100vh-5rem)] lg:flex-row lg:items-end">
      {/* Desktop pozadinska slika */}
      <Image
        src="/hero2.png"
        alt="Rentivo – Iznajmljivanje vozila Novi Sad"
        fill
        className="hidden lg:block object-cover object-[center_70%]"
        priority
      />
      <div className="hidden lg:block absolute inset-0 bg-[#0a0a0f]/45" />

      {/* Mobilna slika – puna širina, fiksna visina */}
      <div className="relative w-full h-[55vw] max-h-[60vh] overflow-hidden lg:hidden">
        <Image
          src="/hero2.png"
          alt="Rentivo – Iznajmljivanje vozila Novi Sad"
          fill
          className="object-cover object-[center_70%]"
          priority
        />
      </div>

      {/* Tekst i dugmad */}
      <div className="flex-1 flex flex-col justify-center relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-0 lg:pb-14 lg:flex-none lg:block text-left bg-[#0a0a0f] lg:bg-transparent">
        <h1 className="font-extrabold text-white leading-tight mb-2 lg:mb-6">
          <span className="text-4xl sm:text-5xl lg:text-6xl block mb-1">Rent a Car Rentivo</span>
          <span className="text-2xl sm:text-3xl lg:text-5xl text-[#6b9bff] block">Iznajmljivanje vozila – Novi Sad</span>
        </h1>
        <p className="text-[#cbd5e1] text-sm sm:text-base lg:text-xl max-w-2xl mt-3 mb-6 lg:mt-0 lg:mb-10">
          Brza rezervacija, transparentne cene i dostava vozila na adresu. Rentivo D.O.O. – vaš
          pouzdani partner za rent a car usluge.
        </p>
        <div className="flex flex-row gap-2 lg:gap-4 justify-start">
          <Link
            href="/vozni-park"
            className="bg-[#1a5cf5] hover:bg-[#1547d4] text-white font-bold px-5 py-2.5 lg:px-8 lg:py-4 rounded-lg text-sm lg:text-base transition-colors"
          >
            Odaberite vozilo
          </Link>
          <a
            href={CONTACT_PHONE_HREF}
            className="border-2 border-white/30 hover:border-white/60 text-white font-bold px-5 py-2.5 lg:px-8 lg:py-4 rounded-lg text-sm lg:text-base transition-colors hover:bg-white/10 backdrop-blur-sm"
          >
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
