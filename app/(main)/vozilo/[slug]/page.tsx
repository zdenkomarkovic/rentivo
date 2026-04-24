import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getCarBySlug } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { buildMetadata } from "@/lib/metadata";
import ReservationForm from "@/components/ReservationForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const car = await getCarBySlug(slug);
  if (!car) return buildMetadata({ title: "Vozilo nije pronađeno", noIndex: true });
  return buildMetadata({
    title: car.name,
    description: car.description ?? `Iznajmite ${car.name} – od ${car.pricePerDay}€/dan.`,
  });
}

export default async function VoziloPage({ params }: PageProps) {
  const { slug } = await params;
  const car = await getCarBySlug(slug);
  if (!car) notFound();

  const specs = [
    car.transmission && {
      label: "Menjač", value: car.transmission === "automatic" ? "Automat" : "Manuelni",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />,
    },
    car.fuel && {
      label: "Gorivo", value: car.fuel,
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h10.5M3.75 6.75h10.5M3.75 12.75h6" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5v15A1.5 1.5 0 0 1 13.5 21h-9A1.5 1.5 0 0 1 3 19.5v-15Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25h1.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H15" /></>,
    },
    car.seats && {
      label: "Mesta", value: `${car.seats}`,
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></>,
    },
    car.year && {
      label: "Godište", value: `${car.year}.`,
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></>,
    },
    car.power && {
      label: "Snaga", value: `${car.power} KS`,
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />,
    },
    car.color && {
      label: "Boja", value: car.color,
      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" /></>,
    },
  ].filter(Boolean) as { label: string; value: string; icon: ReactNode }[];

  return (
    <div className="min-h-screen bg-[#0d0d14]">

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0f] border-b border-[#404880] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/vozni-park" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-white text-sm transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Vozni park
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-10">

        {/* Hero slika */}
        <div className="relative w-full h-44 sm:h-80 lg:h-[26rem] rounded-2xl overflow-hidden border border-[#404880] mb-4 sm:mb-8 bg-[#dcdcdc]">
          {car.image ? (
            <Image
              src={urlFor(car.image).width(1400).height(700).url()}
              alt={car.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#2a2d3e]">
              <svg className="w-24 h-24 text-[#4a5168]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6">
            <h1 className="text-2xl sm:text-4xl font-bold text-white drop-shadow">{car.name}</h1>
          </div>
        </div>

        {/* Glavni sadržaj */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">

          {/* Leva kolona – detalji */}
          <div className="lg:col-span-1 flex flex-col gap-3 sm:gap-4">

            {/* Specifikacije */}
            {specs.length > 0 && (
              <div className="bg-[#181828] border border-[#404880] rounded-2xl p-4 sm:p-5">
                <h2 className="text-white font-semibold mb-3">Specifikacije</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {specs.map(({ label, value, icon }) => (
                    <div key={label} className="bg-[#0d0d14] border border-[#404880] rounded-xl px-4 py-3 flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#1a5cf5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        {icon}
                      </svg>
                      <div>
                        <p className="text-[#94a3b8] text-xs mb-0.5">{label}</p>
                        <p className="text-white font-semibold text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Opis */}
            {car.description && (
              <div className="bg-[#181828] border border-[#404880] rounded-2xl p-4 sm:p-5">
                <h2 className="text-white font-semibold mb-2 sm:mb-3">Opis</h2>
                <p className="text-[#94a3b8] leading-relaxed text-sm">{car.description}</p>
              </div>
            )}

            {/* Oprema */}
            {car.features && car.features.length > 0 && (
              <div className="bg-[#181828] border border-[#404880] rounded-2xl p-4 sm:p-5">
                <h2 className="text-white font-semibold mb-2 sm:mb-3">Oprema</h2>
                <ul className="flex flex-wrap gap-2">
                  {car.features.map((f: string) => (
                    <li key={f} className="text-xs text-[#94a3b8] bg-[#0d0d14] border border-[#404880] px-3 py-1.5 rounded-full">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cenovnik */}
            {car.pricingTable && car.pricingTable.length > 0 && (
              <div className="bg-[#181828] border border-[#404880] rounded-2xl p-4 sm:p-5">
                <h2 className="text-white font-semibold mb-3">Cenovnik</h2>
                <div className="rounded-xl border border-[#404880] overflow-hidden">
                  <div className="grid grid-cols-2 bg-[#232845] px-5 py-2.5">
                    <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">Broj dana</span>
                    <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">Cena / dan</span>
                  </div>
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {car.pricingTable.map((tier: any, i: number) => (
                    <div key={i} className="grid grid-cols-2 px-5 py-3.5 border-t border-[#404880] hover:bg-[#0d0d14] transition-colors">
                      <span className="text-white text-sm">{tier.days} dana</span>
                      <span className="text-[#1a5cf5] font-semibold text-sm">{tier.price}€</span>
                    </div>
                  ))}
                </div>
                <p className="text-[#94a3b8] text-xs mt-3 italic">
                  * Cene u € su informativnog karaktera. Plaćanje se vrši u dinarima.
                </p>
              </div>
            )}
          </div>

          {/* Desna kolona – cena + forma */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="sticky top-6 flex flex-col gap-4">
              <div className="bg-[#181828] border border-[#404880] rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-[#94a3b8] text-xs mb-0.5">Početna cena</p>
                  <div>
                    <span className="text-[#94a3b8] text-sm">od </span>
                    <span className="text-3xl font-extrabold text-[#1a5cf5]">{car.pricePerDay}€</span>
                    <span className="text-[#94a3b8] text-sm ml-1">/dan</span>
                  </div>
                </div>
              </div>

              <ReservationForm carName={car.name} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
