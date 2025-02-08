// import { setTimeout } from "timers/promises";

import { Result } from "../api/search/types";
import { SearchResultProps } from "./SearchResult";

export async function getSearchResults(
  filter: string
): Promise<SearchResultProps[]> {
  const response = await fetch(
    `http://localhost:3000/api/search?query=${filter}`
  );
  const results = (await response.json()) as Result[];

  return results.map((x) => ({ title: x.title, breamdCrumbs: x.path }));
}
