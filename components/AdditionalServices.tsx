const services = [
  { service: "Dostava/preuzimanje u centru Novog Sada", price: "20 €" },
  { service: "Dostava/preuzimanje u Srbiji – do 50 km", price: "30 €" },
  { service: "Dostava/preuzimanje u Srbiji – do 200 km", price: "90 €" },
  { service: "Dostava/preuzimanje u Srbiji – do 300 km", price: "140 €" },
  { service: "Najam van radnog vremena poslovnice", price: "20 €" },
  { service: "Pranje veoma zaprljanog vozila", price: "20 €" },
  { service: "Hemijsko čišćenje celog vozila", price: "100 €" },
  { service: "Čišćenje svih sedišta", price: "50 €" },
  { service: "Čišćenje zadnjih sedišta", price: "25 €" },
  { service: "Sedište za decu", price: "10 €" },
  { service: "Taksa za izlazak iz zemlje", price: "20 €" },
];

const damages = [
  { item: "Uništeni pneumatik", price: "Po vrsti pneumatika" },
  { item: "Izgubljeni ključ / daljinski upravljač", price: "250 €" },
  { item: "Gubitak dokumenata vozila", price: "100 €" },
  { item: "Izgubljena / uništena registarska tablica", price: "100 €" },
];

function Table({
  rows,
  priceColor = "text-[#2563eb]",
}: {
  rows: { service?: string; item?: string; price: string }[];
  priceColor?: string;
}) {
  return (
    <div className="rounded-xl border border-[#1e1e2e] overflow-hidden">
      {rows.map((row, i) => (
        <div
          key={row.service ?? row.item}
          className={`flex items-center justify-between px-5 py-3.5 text-sm ${
            i % 2 === 0 ? "bg-[#0b0b0f]" : "bg-[#0d0d12]"
          } ${i < rows.length - 1 ? "border-b border-[#1e1e2e]" : ""}`}
        >
          <span className="text-[#cbd5e1] pr-4">{row.service ?? row.item}</span>
          <span className={`${priceColor} font-bold whitespace-nowrap`}>{row.price}</span>
        </div>
      ))}
    </div>
  );
}

export default function AdditionalServices() {
  return (
    <section className="py-24 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="mb-14 text-center">
          <p className="text-[#2563eb] text-sm font-semibold tracking-widest uppercase mb-3">Cenovnik</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] mb-4">
            Dodatne usluge i troškovi
          </h2>
          <p className="text-[#cbd5e1] max-w-xl mx-auto">
            Sve cene su transparentne i jasno definisane unapred.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#f8fafc] font-semibold text-base mb-4">Dodatne usluge</h3>
            <Table rows={services} />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[#f8fafc] font-semibold text-base mb-4">Troškovi oštećenja</h3>
              <Table rows={damages} priceColor="text-red-400" />
            </div>

            <div className="bg-[#13131a] border border-[#1e1e2e] rounded-xl p-5">
              <p className="text-[#cbd5e1] text-sm leading-relaxed">
                <span className="text-[#f8fafc] font-semibold block mb-1">
                  Oštećenja koja ne pokriva osiguranje
                </span>
                Točkovi, ratkapne, donji postroj, naplatci, unutrašnjost vozila i naknadno ugrađen radio.
                Iznos se utvrđuje prema cenovniku ovlašćenog servisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
