import {
  CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_EMAIL,
  COMPANY_ADDRESS, PICKUP_ADDRESS, SOCIAL_INSTAGRAM,
} from "@/lib/constants";
import ContactForm from "./ContactForm";

const items = [
  {
    label: "Telefon",
    value: CONTACT_PHONE,
    href: CONTACT_PHONE_HREF,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    ),
  },
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    ),
  },
  {
    label: "Sedište firme",
    value: COMPANY_ADDRESS,
    href: undefined,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    ),
  },
  {
    label: "Preuzimanje vozila",
    value: PICKUP_ADDRESS,
    href: undefined,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    ),
  },
  {
    label: "Instagram",
    value: "@rent_a_car_rentivo",
    href: SOCIAL_INSTAGRAM,
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
    filled: true,
  },
];

export default function ContactSection() {
  const mapPickup = "https://maps.google.com/maps?q=45.222957003403415,19.900640747113002&z=16&output=embed&hl=sr";
  const mapHQ     = "https://maps.google.com/maps?q=45.25521,19.84250&z=16&output=embed&hl=sr";

  return (
    <section className="py-20 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Kontakt i lokacija</h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Pronađite nas ili nas kontaktirajte za rezervaciju i sva pitanja.
          </p>
        </div>

        {/* Kontakt info (levo) + Forma (desno) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-[#181828] rounded-xl border border-[#404880] px-5 py-4">
                <div className="w-10 h-10 bg-[#1a5cf5]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1a5cf5]" fill={item.filled ? "currentColor" : "none"} stroke={item.filled ? "none" : "currentColor"} strokeWidth={1.5} viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white font-semibold hover:text-[#1a5cf5] transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>

        {/* Dve mape jedna pored druge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-[#404880]">
            <div className="bg-[#181828] px-4 py-2.5 border-b border-[#404880]">
              <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-wide">Sedište firme – Trg Republike 20, Novi Sad</p>
            </div>
            <iframe
              src={mapHQ}
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="Sedište firme – Trg Republike 20, Novi Sad"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#404880]">
            <div className="bg-[#181828] px-4 py-2.5 border-b border-[#404880]">
              <p className="text-[#94a3b8] text-xs font-medium uppercase tracking-wide">Preuzimanje vozila – Karlovački Drum BB, Petrovaradin</p>
            </div>
            <iframe
              src={mapPickup}
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="Preuzimanje vozila – Karlovački Drum BB, Petrovaradin"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
