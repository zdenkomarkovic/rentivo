import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Uslovi iznajmljivanja" });

const terms = [
  { n: "1", title: "Opšti uslovi", items: ["Iznajmljivanje vozila moguće je licima starijim od 21 godine.", "Vozač mora posedovati važeću vozačku dozvolu minimum 2 godine.", "Prilikom preuzimanja vozila obavezno je pokazati lični dokument (lična karta ili pasoš)."] },
  { n: "2", title: "Rezervacija i plaćanje", items: ["Rezervacija vozila može se izvršiti online, telefonom ili lično.", "Plaćanje se vrši gotovinom ili karticom."] },
  { n: "3", title: "Depozit", items: ["Prilikom preuzimanja vozila klijent ostavlja depozit koji se vraća po isteku najma, ukoliko nema oštećenja.", "Iznos depozita zavisi od kategorije vozila."] },
  { n: "4", title: "Preuzimanje i vraćanje vozila", items: ["Klijent je dužan da vozilo vrati u ispravnom stanju.", "Vozilo se vraća čisto i sa istim nivoom goriva.", "Kašnjenje pri vraćanju može biti dodatno naplaćeno."] },
  { n: "5", title: "Korišćenje vozila – zabranjeno je:", items: ["Davanje vozila drugom licu bez odobrenja.", "Vožnja pod dejstvom alkohola ili narkotika.", "Korišćenje vozila za taksi usluge ili ilegalne aktivnosti.", "Iznošenje vozila van teritorije bez prethodnog odobrenja."] },
  { n: "6", title: "Osiguranje i odgovornost", items: ["Vozila su osigurana u skladu sa zakonom.", "U slučaju nezgode, klijent je dužan da odmah obavesti policiju i rent a car firmu.", "Klijent snosi troškove oštećenja nastalih nepažnjom ili kršenjem pravila."] },
  { n: "7", title: "Gorivo", items: ["Gorivo nije uključeno u cenu najma.", "Vozilo se vraća sa istim nivoom goriva kao pri preuzimanju."] },
  { n: "8", title: "Otkazivanje rezervacije", items: ["Otkazivanje je moguće bez naknade do 24h pre početka najma.", "U suprotnom, depozit se ne vraća."] },
  { n: "9", title: "Kazne i prekršaji", items: ["Sve kazne (parking, saobraćajne) snosi klijent.", "Firma ima pravo da prosledi podatke nadležnim organima."] },
  { n: "10", title: "Završne odredbe", items: ["Potpisivanjem ugovora klijent prihvata sve navedene uslove.", "Firma zadržava pravo na izmene uslova bez prethodne najave."] },
];

export default function UsloviPage() {
  return (
    <div className="min-h-screen bg-[#0d0d14]">
      <div className="bg-[#0a0a0f] border-b border-[#404880] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Uslovi iznajmljivanja</h1>
          <p className="text-[#94a3b8]">Molimo vas da pažljivo pročitate uslove pre sklapanja ugovora.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
        {terms.map((t) => (
          <div key={t.n} className="bg-[#181828] border border-[#404880] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 flex items-center gap-4 border-b border-[#404880]">
              <span className="w-8 h-8 rounded-full bg-[#1a5cf5] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                {t.n}
              </span>
              <h2 className="font-bold text-white">{t.title}</h2>
            </div>
            <div className="px-6 py-5 space-y-3">
              {t.items.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#cbd5e1]">
                  <svg className="w-4 h-4 text-[#1a5cf5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
