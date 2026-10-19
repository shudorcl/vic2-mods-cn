import { getCollection } from "astro:content";
import { modSlug } from "../utils/mods";

export async function GET() {
  const mods = await getCollection("mods");
  const index = mods.map((mod) => ({
    id: modSlug(mod),
    title: mod.data.title,
    shortName: mod.data.shortName,
    description: mod.data.description,
    categories: mod.data.categories,
    languages: mod.data.languages,
    status: mod.data.status,
  }));
  return new Response(JSON.stringify(index), { headers: { "Content-Type": "application/json; charset=utf-8" } });
}
