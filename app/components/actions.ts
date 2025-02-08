"use server";

import { setTimeout } from "timers/promises";
import { promises as fs } from "fs";
import { Result } from "../api/search/types";
import { SearchResultProps } from "./SearchResult";

export async function getSearchResultsAction(
  query: string
): Promise<SearchResultProps[]> {
  await setTimeout(2000);

  const fileContents = await fs.readFile(
    process.cwd() + "/app/api/search/data.json",
    "utf8"
  );
  const data = JSON.parse(fileContents) as Result[];

  if (query) {
    const queried = data.filter((x) => x.title.includes(query));
    console.log("getSearchResultsAction filtered query=", query, queried);

    return queried;
  } else {
    console.log("getSearchResultsAction all", data);
    return data
}
