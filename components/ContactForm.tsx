"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
        <p className="text-green-400 font-semibold text-lg mb-2">Poruka poslata!</p>
        <p className="text-[#cbd5e1] text-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="bg-[#181828] border border-[#404880] rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-white font-bold text-xl mb-1">Pošaljite poruku</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Ime *"     name="firstName" type="text"  placeholder="Vaše ime" />
        <Field label="Prezime *" name="lastName"  type="text"  placeholder="Vaše prezime" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email"        name="email" type="email" placeholder="email@primer.com" />
        <Field label="Telefon"  name="phone" type="tel"   placeholder="+381 61 456 25 60" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[#cbd5e1] text-[10px] font-medium uppercase tracking-wide">Poruka *</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Vaša poruka..."
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
        className="bg-[#1a5cf5] hover:bg-[#1547d4] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-sm"
      >
        {pending ? "Slanje..." : "Pošalji poruku"}
      </button>
    </form>
  );
}

function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#cbd5e1] text-[10px] font-medium uppercase tracking-wide">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-[#111120] border border-[#404880] rounded-xl px-3 py-2 text-white text-sm placeholder-[#64748b] focus:outline-none focus:border-[#1a5cf5] transition-colors"
      />
    </div>
  );
}
