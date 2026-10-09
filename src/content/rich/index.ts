import { corePages } from "./core";
import { howWeWorkPages } from "./engagement";
import { engineeringPages } from "./engineering";
import { industryPages } from "./industries";
import { platformPages } from "./platforms";
import type { RichPage } from "./types";

const pages: RichPage[] = [...corePages, ...engineeringPages, ...platformPages, ...industryPages, ...howWeWorkPages];

export { howWeWorkPages };

const byPath = new Map(pages.map((page) => [page.path, page]));

export function getRichPage(path: string) {
  return byPath.get(path);
}

export function richPages() {
  return pages;
}
