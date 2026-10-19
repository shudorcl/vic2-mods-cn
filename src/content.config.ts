import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const lineageSchema = z.object({
  basedOn: z.array(z.string()).default([]),
  inspiredBy: z.array(z.string()).default([]),
  forks: z.array(z.string()).default([]),
});

const mods = defineCollection({
  loader: glob({ pattern: "**/index.{md,mdx}", base: "./src/content/mods" }),
  schema: z.object({
    title: z.string(),
    shortName: z.string().optional(),
    chineseName: z.string().optional(),
    description: z.string(),
    status: z.enum(["active", "completed", "maintenance", "inactive", "unknown"]),
    gameVersion: z.array(z.string()).min(1),
    latestVersion: z.string().optional(),
    lastUpdated: z.coerce.date().optional(),
    authors: z.array(z.string()).default([]),
    languages: z.array(z.string()).default(["en"]),
    chinese: z.object({
      status: z.enum(["official", "community", "machine", "outdated", "none"]),
      link: z.url().nullable().default(null),
      note: z.string().optional(),
    }),
    categories: z.array(z.enum(["historical", "alternate-history", "overhaul", "cold-war", "qol"])).default([]),
    tags: z.array(z.string()).default([]),
    lineage: lineageSchema.optional(),
    links: z.object({
      github: z.url().optional(),
      moddb: z.url().optional(),
      discord: z.url().optional(),
      website: z.url().optional(),
    }).optional(),
    downloads: z.array(z.object({
      name: z.string(),
      provider: z.enum(["github", "moddb", "baidu", "website", "other"]),
      url: z.url(),
      official: z.boolean(),
      kind: z.enum(["download", "mirror", "localization"]).default("download"),
    })).default([]),
    cover: z.string(),
    screenshots: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    recommendation: z.object({
      beginnerFriendly: z.boolean().default(false),
      score: z.number().int().min(1).max(5),
    }),
    verified: z.object({
      date: z.coerce.date(),
      source: z.enum(["github", "moddb", "website", "community"]),
    }),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().default(0),
    updated: z.coerce.date(),
  }),
});

export const collections = { mods, guides };
