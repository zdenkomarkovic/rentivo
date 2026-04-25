import Link from "next/link";
import Image from "next/image";
import { getCategories, urlFor } from "@/lib/sanity";

export default async function CategoriesSection() {
  let categories: Awaited<ReturnType<typeof getCategories>> = [];
  try {
    categories = await getCategories();
  } catch { /* */ }

  if (categories.length === 0) return null;

  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Kategorije vozila</h2>
          <p className="text-[#cbd5e1] max-w-xl mx-auto">
            Pronađite vozilo koje odgovara vašim potrebama.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {categories.map((cat: any) => (
            <Link
              key={cat._id}
              href={`/vozni-park?kategorija=${cat.slug?.current ?? ""}`}
              className="bg-[#181828] rounded-2xl border border-[#404880] overflow-hidden hover:border-[#1a5cf5] transition-all hover:shadow-lg hover:shadow-[#1a5cf5]/10 flex flex-col"
            >
              <div className="relative h-52 bg-[#dcdcdc] overflow-hidden">
                {cat.image ? (
                  <>
                    <Image
                      src={urlFor(cat.image).width(600).fit("max").url()}
                      alt={cat.title}
                      fill
                      className="object-contain transition-transform duration-500 p-2"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/60 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#4a5168]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-xl mb-1">{cat.title}</h3>
                {cat.startingPrice != null ? (
                  <p className="text-[#cbd5e1] text-sm">
                    od <span className="text-[#1a5cf5] font-semibold">{cat.startingPrice}€</span>
                  </p>
                ) : (
                  <p className="text-[#cbd5e1] text-sm">Pogledaj vozila</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
