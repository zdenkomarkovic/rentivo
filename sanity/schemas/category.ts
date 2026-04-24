import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Kategorija",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naziv",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Slika kategorije",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "startingPrice",
      title: "Cena od (€/dan)",
      type: "number",
      description: "Prikazuje se na kartici kao 'od X€ pa naviše'",
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "startingPrice" },
    prepare(sel) {
      return {
        title: sel.title,
        subtitle: sel.subtitle ? `od ${sel.subtitle}€/dan` : undefined,
        media: sel.media,
      };
    },
  },
});
