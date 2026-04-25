import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const isConfigured = /^[a-z0-9-]+$/.test(projectId);

export const client = isConfigured
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = isConfigured && client ? imageUrlBuilder(client) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: SanityImageSource): any {
  if (!builder) return { url: () => "", width: () => ({ height: () => ({ url: () => "" }) }) };
  return builder.image(source);
}

const revalidate = { next: { revalidate: 60 } };

export async function getCars(kategorija?: string) {
  if (!client) return [];
  const filter = kategorija
    ? `*[_type == "car" && category->slug.current == $kategorija]`
    : `*[_type == "car"]`;
  return client.fetch(
    `${filter} | order(pricePerDay asc) {
      _id, name, slug, "category": category->title, pricePerDay,
      transmission, fuel, seats, year, image, available
    }`,
    kategorija ? { kategorija } : {},
    revalidate
  );
}

export async function getCategories() {
  if (!client) return [];
  return client.fetch(
    `*[_type == "category"] | order(title asc) {
      _id, title, slug, image, startingPrice
    }`,
    {},
    revalidate
  );
}

export async function getCarBySlug(slug: string) {
  if (!client) return null;
  return client.fetch(
    `*[_type == "car" && slug.current == $slug][0] {
      _id, name, slug, "category": category->title, pricePerDay,
      transmission, fuel, seats, year, image, available,
      description, features, power, color, pricingTable
    }`,
    { slug },
    revalidate
  );
}
