import { defineField, defineType } from "sanity";

export default defineType({
  name: "car",
  title: "Vozilo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Naziv vozila",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Slika vozila",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Kategorija",
      type: "reference",
      to: [{ type: "category" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "pricePerDay",
      title: "Cena po danu (€)",
      type: "number",
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "transmission",
      title: "Menjač",
      type: "string",
      options: {
        list: [
          { title: "Manuelni", value: "manual" },
          { title: "Automatski", value: "automatic" },
        ],
      },
    }),
    defineField({
      name: "fuel",
      title: "Gorivo",
      type: "string",
      options: {
        list: [
          { title: "Benzin", value: "Benzin" },
          { title: "Dizel", value: "Dizel" },
          { title: "Hibrid", value: "Hibrid" },
          { title: "Električno", value: "Električno" },
        ],
      },
    }),
    defineField({
      name: "seats",
      title: "Broj mesta",
      type: "number",
    }),
    defineField({
      name: "year",
      title: "Godište",
      type: "number",
    }),
    defineField({
      name: "available",
      title: "Dostupno",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "description",
      title: "Opis",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "features",
      title: "Karakteristike / Oprema",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "power",
      title: "Snaga motora (KS)",
      type: "number",
    }),
    defineField({
      name: "color",
      title: "Boja",
      type: "string",
    }),
    defineField({
      name: "pricingTable",
      title: "Cenovnik",
      type: "array",
      of: [
        {
          type: "object",
          name: "priceTier",
          title: "Red cenovnika",
          fields: [
            defineField({
              name: "days",
              title: "Dani (npr. 1–3)",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "price",
              title: "Cena (€/dan)",
              type: "number",
              validation: (r) => r.required().min(1),
            }),
          ],
          preview: {
            select: { title: "days", subtitle: "price" },
            prepare(sel) {
              return { title: `${sel.title} dana`, subtitle: `${sel.subtitle}€/dan` };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "pricePerDay",
      media: "image",
    },
    prepare(sel) {
      return {
        title: sel.title,
        subtitle: `${sel.subtitle}€ / dan`,
        media: sel.media,
      };
    },
  },
});
