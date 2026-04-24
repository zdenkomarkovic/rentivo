import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getCars, getCategories } from "@/lib/sanity";
import CarCard from "@/components/CarCard";

export const metadata = buildMetadata({ title: "Vozni park" });

interface PageProps {
  searchParams: Promise<{ kategorija?: string }>;
}

export default async function VozniParkPage({ searchParams }: PageProps) {
  const { kategorija } = await searchParams;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cars: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let categories: any[] = [];
  try {
    [cars, categories] = await Promise.all([getCars(kategorija), getCategories()]);
  } catch { /* */ }

  const activeCategory = kategorija
    ? categories.find((c: any) => c.slug?.current === kategorija)
    : null;

  return (
    <div className="min-h-screen bg-[#0d0d14]">
      <div className="bg-[#0a0a0f] border-b border-[#404880] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Vozni park</h1>
          <p className="text-[#94a3b8]">Izaberite vozilo koje odgovara vašim potrebama.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Filter kategorija */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              href="/vozni-park"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                !kategorija
                  ? "bg-[#1a5cf5] border-[#1a5cf5] text-white"
                  : "border-[#404880] text-[#94a3b8] hover:border-[#1a5cf5] hover:text-white"
              }`}
            >
              Sve
            </Link>
            {categories.map((cat: any) => (
              <Link
                key={cat._id}
                href={`/vozni-park?kategorija=${cat.slug?.current}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  kategorija === cat.slug?.current
                    ? "bg-[#1a5cf5] border-[#1a5cf5] text-white"
                    : "border-[#404880] text-[#94a3b8] hover:border-[#1a5cf5] hover:text-white"
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        )}

        {activeCategory && (
          <p className="text-[#94a3b8] text-sm mb-6">
            Prikazano: <span className="text-white font-semibold">{activeCategory.title}</span>
            {" · "}
            <Link href="/vozni-park" className="text-[#1a5cf5] hover:underline">Prikaži sva vozila</Link>
          </p>
        )}

        {cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car: any) => <CarCard key={car._id} car={car} />)}
          </div>
        ) : (
          <div className="border-2 border-dashed border-[#404880] rounded-2xl py-32 text-center">
            <p className="text-[#94a3b8] font-medium">
              {kategorija ? "Nema vozila u ovoj kategoriji." : "Vozila se dodaju putem "}<span className="text-[#1a5cf5]">{!kategorija && "/studio"}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
