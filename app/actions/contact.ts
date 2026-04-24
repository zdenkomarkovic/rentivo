"use server";

import { CONTACT_EMAIL } from "@/lib/constants";

export interface ContactState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const firstName = (formData.get("firstName") as string).trim();
  const lastName  = (formData.get("lastName")  as string).trim();
  const email     = (formData.get("email")     as string).trim();
  const phone     = (formData.get("phone")     as string).trim();
  const message   = (formData.get("message")   as string).trim();

  if (!firstName || !lastName || !email || !message) {
    return { status: "error", message: "Molimo popunite sva obavezna polja." };
  }

  const apiKey    = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const sender    = process.env.SITE_MAIL_SENDER;
  const receiver  = process.env.SITE_MAIL_RECEIVER || CONTACT_EMAIL;

  if (!apiKey || !secretKey || !sender) {
    return { status: "error", message: "Greška u konfiguraciji emaila." };
  }

  const htmlBody = `
    <h2>Nova poruka sa sajta – Rentivo</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td style="color:#666">Ime i prezime</td><td>${firstName} ${lastName}</td></tr>
      <tr><td style="color:#666">Email</td><td>${email}</td></tr>
      ${phone ? `<tr><td style="color:#666">Telefon</td><td>${phone}</td></tr>` : ""}
      <tr><td style="color:#666;vertical-align:top">Poruka</td><td>${message.replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString("base64")}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: sender, Name: "Rentivo Kontakt" },
          To: [{ Email: receiver }],
          ReplyTo: { Email: email, Name: `${firstName} ${lastName}` },
          Subject: `Poruka sa sajta – ${firstName} ${lastName}`,
          HTMLPart: htmlBody,
        },
      ],
    }),
  });

  if (!res.ok) {
    return { status: "error", message: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite." };
  }

  return { status: "success", message: "Poruka je uspešno poslata! Odgovorićemo vam uskoro." };
}
