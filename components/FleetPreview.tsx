import Link from "next/link";
import { getCars } from "@/lib/sanity";
import CarCard from "./CarCard";

export default async function FleetPreview() {
  let cars: Awaited<ReturnType<typeof getCars>> = [];
  try {
    const all = await getCars();
    cars = all.slice(0, 6);
  } catch { /* */ }

  return (
    <section className="py-20 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Odaberite vozilo</h2>
          <p className="text-[#cbd5e1] max-w-xl mx-auto">
            Sva vozila su tehnički ispravna i redovno servisirana.
          </p>
        </div>

        {cars.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {cars.map((car: any) => <CarCard key={car._id} car={car} />)}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/vozni-park"
                className="inline-block bg-[#113078] hover:bg-[#0d2460] text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
              >
                Pogledaj sva vozila
              </Link>
            </div>
          </>
        ) : (
          <div className="border-2 border-dashed border-[#404880] rounded-2xl py-24 text-center">
            <svg className="w-16 h-16 mx-auto text-[#1e2030] mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
            <p className="text-[#cbd5e1] font-medium">Vozila se dodaju putem <span className="text-[#113078]">/studio</span></p>
          </div>
        )}
      </div>
    </section>
  );
}
