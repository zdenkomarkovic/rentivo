"use client";

import { useActionState, useState } from "react";
import { submitReservation, type ReservationState } from "@/app/actions/reservation";

const initial: ReservationState = { status: "idle", message: "" };

export default function ReservationForm({ carName }: { carName: string }) {
  const [state, action, pending] = useActionState(submitReservation, initial);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
        <p className="text-green-400 font-semibold text-lg mb-2">Zahtev poslat!</p>
        <p className="text-[#cbd5e1] text-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="rounded-2xl border border-[#404880] bg-[#181828] p-4 sm:p-6 flex flex-col gap-3 lg:gap-5">
      <h2 className="text-white font-bold text-xl">Rezervišite vozilo</h2>

      <Field label="Vozilo" name="car" type="text" value={carName} readOnly />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Ime *" name="firstName" type="text" placeholder="Vaše ime" />
        <Field label="Prezime *" name="lastName" type="text" placeholder="Vaše prezime" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email *" name="email" type="email" placeholder="email@primer.com" />
        <Field label="Broj telefona *" name="phone" type="tel" placeholder="+381 6x xxx xxxx" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Field label="Datum preuzimanja *" name="pickupDate" type="date" />
        <Field label="Datum vraćanja *" name="returnDate" type="date" />
        <TimePicker label="Vreme preuzimanja *" name="pickupTime" className="col-span-2 sm:col-span-1" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[#cbd5e1] text-[10px] font-medium uppercase tracking-wide">Poruka</label>
        <textarea
          name="message"
          rows={3}
          placeholder="Dodatne napomene (opciono)..."
          className="bg-[#111120] border border-[#404880] rounded-xl px-3 py-2 text-white text-sm placeholder-[#64748b] focus:outline-none focus:border-[#1a5cf5] resize-none transition-colors"
        />
      </div>

      {state.status === "error" && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bg-[#1a5cf5] hover:bg-[#1547d4] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
      >
        {pending ? "Slanje..." : "Pošalji zahtev"}
      </button>
    </form>
  );
}

function TimePicker({ label, name, className }: { label: string; name: string; className?: string }) {
  const [hour, setHour] = useState("08");
  const [minute, setMinute] = useState("00");

  const selectClass = "flex-1 bg-[#111120] border border-[#404880] rounded-xl px-2 py-2 text-white text-sm focus:outline-none focus:border-[#1a5cf5] transition-colors [color-scheme:dark] appearance-none text-center";

  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label className="text-[#cbd5e1] text-[10px] font-medium uppercase tracking-wide">{label}</label>
      <input type="hidden" name={name} value={`${hour}:${minute}`} />
      <div className="flex items-center gap-1.5">
        <select value={hour} onChange={e => setHour(e.target.value)} className={selectClass}>
          {Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0")).map(h => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
        <span className="text-white font-bold">:</span>
        <select value={minute} onChange={e => setMinute(e.target.value)} className={selectClass}>
          {["00", "15", "30", "45"].map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  readOnly,
  className,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label className="text-[#cbd5e1] text-[10px] font-medium uppercase tracking-wide">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        readOnly={readOnly}
        className={`border border-[#404880] rounded-xl px-3 py-2 text-white text-sm placeholder-[#64748b] focus:outline-none transition-colors [color-scheme:dark] ${
          readOnly
            ? "bg-[#0d0d14] text-[#cbd5e1] cursor-default"
            : "bg-[#111120] focus:border-[#1a5cf5]"
        }`}
      />
    </div>
  );
}
