import Image from "next/image";
import Link from "next/link";
import { CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_EMAIL, PICKUP_ADDRESS, SOCIAL_INSTAGRAM } from "@/lib/constants";

const links = [
  { href: "/", label: "Početna" },
  { href: "/vozni-park", label: "Vozni park" },
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/uslovi", label: "Uslovi najma" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image src="/logo.PNG" alt="Rentivo" width={140} height={44} className="h-12 w-auto mb-5" />
            <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
              Rentivo D.O.O. – Vaš pouzdani partner za iznajmljivanje vozila u Novom Sadu i celoj Srbiji.
            </p>
            <a
              href={SOCIAL_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @rent_a_car_rentivo
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigacija</h3>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href={CONTACT_PHONE_HREF} className="hover:text-white transition-colors">{CONTACT_PHONE}</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a></li>
              <li>{PICKUP_ADDRESS}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Rentivo D.O.O. Sva prava zadržana.</span>
          <span>Izrada sajta: <a href="https://manikamwebsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Manikam Web Solutions</a></span>
        </div>
      </div>
    </footer>
  );
}
