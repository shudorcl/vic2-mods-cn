import type { CollectionEntry } from "astro:content";

export type ModEntry = CollectionEntry<"mods">;

export const statusLabels = {
  active: "开发中",
  completed: "已完成",
  maintenance: "维护模式",
  inactive: "停止开发",
  unknown: "状态未知",
} as const;

export const categoryLabels = {
  historical: "历史增强",
  "alternate-history": "架空历史",
  overhaul: "大型重制",
  "cold-war": "冷战",
  qol: "体验优化",
} as const;

export const chineseLabels = {
  official: "官方中文",
  community: "社区汉化",
  machine: "机器翻译",
  outdated: "汉化落后",
  none: "暂无中文",
} as const;

export const languageLabels: Record<string, string> = {
  en: "English",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁体中文",
};

export function modSlug(mod: ModEntry) {
  return mod.id.replace(/\/index$/, "");
}

export function sortByRecommendation(mods: ModEntry[]) {
  return [...mods].sort((a, b) =>
    b.data.recommendation.score - a.data.recommendation.score ||
    a.data.title.localeCompare(b.data.title),
  );
}

export function sortByUpdated(mods: ModEntry[]) {
  return [...mods].sort((a, b) =>
    (b.data.lastUpdated?.getTime() ?? 0) - (a.data.lastUpdated?.getTime() ?? 0),
  );
}

export function formatDate(date?: Date) {
  if (!date) return "未记录";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
  }).format(date);
}
