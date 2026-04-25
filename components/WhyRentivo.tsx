export default function WhyRentivo() {
  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Zašto izabrati Rentivo?
            </h2>
            <p className="text-[#cbd5e1] leading-relaxed mb-6">
              Verujemo da poverenje dolazi iz iskustva. Zato su transparentnost, tačnost i
              profesionalan pristup temelj našeg poslovanja. Kada se odlučite za iznajmljivanje
              vozila kod nas, znajte da birate sigurnost, kvalitet i poštovanje dogovora.
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              Naš cilj nije da vam samo pružimo automobil, već da obezbedimo da svaka vožnja
              bude bezbrižna i prijatna. Bez obzira da li vam je potrebno vozilo za poslovni
              sastanak, vikend putovanje sa porodicom ili kao privremeno rešenje dok je vaše
              vozilo na servisu – naša ponuda pokriva sve potrebe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Transparentne cene", desc: "Bez skrivenih troškova. Sve je jasno unapred." },
              { title: "Brza rezervacija", desc: "Online, telefonom ili lično u poslovnici." },
              { title: "Dostava na adresu", desc: "U Novom Sadu i širom Srbije." },
              { title: "Fleksibilni uslovi", desc: "Otkazivanje bez naknade do 24h pre početka." },
            ].map((item) => (
              <div key={item.title} className="bg-[#181828] rounded-xl p-5 border border-[#404880] hover:border-[#113078]/40 transition-colors">
                <div className="w-8 h-8 bg-[#113078]/15 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-[#113078]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-[#cbd5e1]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
