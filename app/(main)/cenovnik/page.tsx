import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Cenovnik" });

const services = [
  { name: "Dostava/preuzimanje u centru Novog Sada", price: "20 €" },
  { name: "Dostava/preuzimanje u Srbiji – do 50 km", price: "30 €" },
  { name: "Dostava/preuzimanje u Srbiji – do 200 km", price: "90 €" },
  { name: "Dostava/preuzimanje u Srbiji – do 300 km", price: "140 €" },
  { name: "Najam van radnog vremena poslovnice", price: "20 €" },
  { name: "Pranje veoma zaprljanog vozila", price: "20 €" },
  { name: "Hemijsko čišćenje celog vozila", price: "100 €" },
  { name: "Čišćenje svih sedišta", price: "50 €" },
  { name: "Čišćenje zadnjih sedišta", price: "25 €" },
  { name: "Sedište za decu", price: "10 €" },
  { name: "Taksa za izlazak iz zemlje", price: "20 €" },
];

const damages = [
  { name: "Uništeni pneumatik", price: "Po vrsti pneumatika" },
  { name: "Izgubljeni ključ / daljinski upravljač alarmnog uređaja", price: "250 €" },
  { name: "Gubitak dokumenata vozila", price: "100 €" },
  { name: "Izgubljena / uništena registarska tablica", price: "100 €" },
];

function Table({ rows, accent }: { rows: { name: string; price: string }[]; accent: "blue" | "red" }) {
  return (
    <div className="rounded-2xl border border-[#404880] overflow-hidden">
      <div className="grid grid-cols-[1fr_auto] bg-[#232845] px-5 py-3">
        <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide">Usluga</span>
        <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide text-right">Cena</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.name}
          className={`grid grid-cols-[1fr_auto] px-5 py-4 gap-4 border-t border-[#404880] ${i % 2 === 0 ? "bg-[#181828]" : "bg-[#131320]"}`}
        >
          <span className="text-[#cbd5e1] text-sm">{row.name}</span>
          <span className={`font-bold text-sm whitespace-nowrap text-right ${accent === "blue" ? "text-[#1a5cf5]" : "text-red-400"}`}>
            {row.price}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CenovnikPage() {
  return (
    <div className="min-h-screen bg-[#0d0d14]">
      <div className="bg-[#0a0a0f] border-b border-[#404880] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cenovnik</h1>
          <p className="text-[#94a3b8]">Sve cene dodatnih usluga jasno su definisane unapred.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        <div className="bg-[#181828] border border-[#404880] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-5">Dodatne usluge</h2>
          <Table rows={services} accent="blue" />
          <p className="text-[#94a3b8] text-xs mt-4 italic">
            * Cene u € su informativnog karaktera. Plaćanje se vrši u dinarima.
          </p>
        </div>

        <div className="bg-[#181828] border border-[#404880] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-2">Troškovi oštećenja</h2>
          <p className="text-[#94a3b8] text-sm mb-5">
            Najmoprimac snosi troškove oštećenja koja ne pokriva osiguranje:
            točkovi, ratkapne, donji postroj, naplatci, unutrašnjost vozila i naknadno ugrađen radio.
            Iznos se utvrđuje prema cenovniku ovlašćenog servisa.
          </p>
          <Table rows={damages} accent="red" />
        </div>

      </div>
    </div>
  );
}
