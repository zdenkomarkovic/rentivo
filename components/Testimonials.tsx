const reviews = [
  {
    name: "Marko Nikolić",
    location: "Novi Sad",
    rating: 5,
    text: "Odlično iskustvo! Vozilo je bilo besprekorno čisto, dokumentacija sredjena za 5 minuta. Osoblje ljubazno i profesionalno. Definitivno preporučujem svima koji traže pouzdano iznajmljivanje u Novom Sadu.",
    initials: "MN",
  },
  {
    name: "Ana Petrović",
    location: "Beograd",
    rating: 5,
    text: "Koristila sam Rentivo za poslovni put i ostala sam veoma zadovoljna. Cene su fer, auto je bio u odličnom stanju, a komunikacija pre i tokom najma je bila na visokom nivou. Svaka preporuka!",
    initials: "AP",
  },
  {
    name: "Stefan Jovanović",
    location: "Subotica",
    rating: 5,
    text: "Brza rezervacija, tačna isporuka vozila i bez skrivenih troškova. Tačno onako kako treba da funkcioniše rent a car. Vratiću se sigurno pri sledećoj poseti Novom Sadu.",
    initials: "SJ",
  },
  {
    name: "Jelena Marković",
    location: "Novi Sad",
    rating: 5,
    text: "Fantastična usluga! Auto sam preuzela brzo, bez čekanja. Vozilo čisto i servisno ispravno. Cena je bila pristupačna za ono što su ponudili. Preporučujem svima!",
    initials: "JM",
  },
  {
    name: "Dragan Lukić",
    location: "Sremska Mitrovica",
    rating: 5,
    text: "Iznajmljivao sam SUV za porodični odmor – sve je prošlo savršeno. Plac za preuzimanje je lako dostupan, a povratak vozila bez ikakvih komplikacija. Top usluga.",
    initials: "DL",
  },
  {
    name: "Milica Stanković",
    location: "Zrenjanin",
    rating: 5,
    text: "Profesionalan tim koji zna šta radi. Vozilo je bilo tačno ono što sam tražila, po veoma razumnoj ceni. Celokupan proces od rezervacije do vraćanja je bio glatko organizovan.",
    initials: "MS",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-[#404880]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Šta kažu naši klijenti</h2>
          <p className="text-[#cbd5e1] max-w-xl mx-auto">
            Poverenje naših korisnika je naša najveća vrednost.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#181828] border border-[#404880] rounded-2xl p-6 flex flex-col gap-4"
            >
              <Stars count={review.rating} />

              <p className="text-[#cbd5e1] text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#404880]">
                <div className="w-9 h-9 rounded-full bg-[#1a5cf5]/20 border border-[#1a5cf5]/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1a5cf5] text-xs font-bold">{review.initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-[#94a3b8] text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
