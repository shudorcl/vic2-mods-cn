import type { ModEntry } from "./mods";
import { modSlug } from "./mods";

export function findMod(mods: ModEntry[], id: string) {
  return mods.find((mod) => modSlug(mod) === id);
}

export function descendantsOf(mods: ModEntry[], id: string) {
  return mods.filter((mod) => mod.data.lineage?.basedOn.includes(id));
}

export function relatedMods(mods: ModEntry[], current: ModEntry) {
  const id = modSlug(current);
  const relatedIds = new Set([
    ...(current.data.lineage?.basedOn ?? []),
    ...(current.data.lineage?.inspiredBy ?? []),
    ...(current.data.lineage?.forks ?? []),
  ]);

  for (const mod of descendantsOf(mods, id)) relatedIds.add(modSlug(mod));
  return mods.filter((mod) => relatedIds.has(modSlug(mod)));
}
