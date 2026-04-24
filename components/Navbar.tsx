"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/constants";

const links = [
  { href: "/", label: "Početna" },
  { href: "/vozni-park", label: "Vozni park" },
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/uslovi", label: "Uslovi najma" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f] border-b border-[#1e2030]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link href="/">
            <Image src="/logo.PNG" alt="Rentivo Rent a Car" width={150} height={48} className="h-12 w-auto" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  path === l.href
                    ? "text-white bg-[#1e2030]"
                    : "text-[#94a3b8] hover:text-white hover:bg-[#1e2030]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href={CONTACT_PHONE_HREF}
            className="hidden lg:flex items-center gap-2 bg-[#113078] hover:bg-[#0d2460] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {CONTACT_PHONE}
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#94a3b8]" aria-label="Meni">
            {open
              ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-[#1e2030] py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium ${path === l.href ? "text-white bg-[#1e2030]" : "text-[#94a3b8]"}`}
              >
                {l.label}
              </Link>
            ))}
            <a href={CONTACT_PHONE_HREF} className="mt-2 flex items-center justify-center gap-2 bg-[#113078] text-white text-sm font-bold px-5 py-3 rounded-lg">
              {CONTACT_PHONE}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
