const reasons = [
  {
    title: "Sigurnost i poverenje",
    desc: "Sva vozila su tehnički ispravna i redovno servisirana. Verujemo da poverenje dolazi iz iskustva.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
  },
  {
    title: "Transparentne cene",
    desc: "Nema skrivenih troškova. Znate tačno šta plaćate pre nego što potpišete ugovor.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: "Brza rezervacija",
    desc: "Rezervišite online, telefonom ili lično. Vozilo je spremno kada vama odgovara.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
  {
    title: "Dostava vozila",
    desc: "Dostavljamo u Novom Sadu i širom Srbije. Preuzimamo vozilo po dogovoru.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    title: "Fleksibilni uslovi",
    desc: "Kratkoročni i dugoročni najam. Otkazivanje bez naknade do 24h pre početka.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    title: "Profesionalan tim",
    desc: "Ljubazno osoblje uvek spremno da pomogne i odgovori na sva vaša pitanja.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="mb-14 text-center">
          <p className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase mb-3">Zašto mi</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] mb-4">
            Zašto izabrati Rentivo?
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Transparentnost, tačnost i profesionalan pristup su temelj našeg poslovanja.
            Naš cilj nije samo da vam pružimo automobil – već da svaka vožnja bude bezbrižna.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e2e] rounded-2xl overflow-hidden border border-[#1e1e2e]">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className={`bg-[#0b0b0f] p-7 hover:bg-[#13131a] transition-colors group ${
                i === reasons.length - 1 && reasons.length % 3 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mb-4 group-hover:bg-[#2563eb]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-[#f8fafc] font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-12 bg-[#13131a] border border-[#1e1e2e] rounded-2xl p-8 text-center">
          <p className="text-[#e2e8f0] text-base italic leading-relaxed max-w-2xl mx-auto">
            "Bez obzira da li vam je vozilo potrebno za poslovni sastanak, vikend putovanje ili
            dok je vaše na servisu – Rentivo pokriva sve vaše potrebe."
          </p>
        </blockquote>
      </div>
    </section>
  );
}
