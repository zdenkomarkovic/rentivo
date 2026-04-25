import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

interface CarCardProps {
  car: {
    _id: string;
    name: string;
    slug: { current: string };
    category: string;
    pricePerDay: number;
    transmission: string;
    fuel: string;
    seats: number;
    year: number;
    image: { asset: { _ref: string } };
    available: boolean;
  };
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <Link href={`/vozilo/${car.slug.current}`} className="bg-[#181828] rounded-2xl border border-[#404880] overflow-hidden hover:border-[#113078]/50 transition-all hover:shadow-lg hover:shadow-[#113078]/10 flex flex-col">
      <div className="relative h-52 bg-[#dcdcdc] overflow-hidden">
        {car.image ? (
          <>
            <Image
              src={urlFor(car.image).width(600).fit("max").url()}
              alt={car.name}
              fill
              className="object-contain hover:scale-105 transition-transform duration-500 p-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/60 via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-[#4a5168]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-semibold text-[#113078] uppercase tracking-wide mb-1">
          {car.category}
        </p>
        <h3 className="text-white font-bold text-xl mb-4">{car.name}</h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {[
            car.transmission === "automatic" ? "Automat" : "Manuelni",
            car.fuel,
            `${car.seats} mesta`,
          ].map((s) => (
            <span key={s} className="text-xs text-[#cbd5e1] bg-[#1e2030] px-3 py-1.5 rounded-full">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-[#cbd5e1] text-sm">od </span>
            <span className="text-2xl font-extrabold text-[#1a5cf5]">{car.pricePerDay}€</span>
          </div>
          <Link
            href={`/vozilo/${car.slug.current}`}
            className="bg-[#113078] hover:bg-[#0d2460] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            Rezerviši
          </Link>
        </div>
      </div>
    </Link>
  );
}
