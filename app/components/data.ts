"use server";

import { promises as fs } from "fs";

export type Result = {
  title: string;
  path: string[];
};

export async function getSearchResults(filter: string): Promise<Result[]> {
  const fileContents = await fs.readFile(
    process.cwd() + "/app/components/data.json",
    "utf8"
  );

  const data = JSON.parse(fileContents) as Result[];

  if (filter === "") {
    console.log("getSearchResults all", data);
    return data;
  } else {
    const filtered = data.filter((x) => x.title.includes(filter));
    console.log("getSearchResults filtered", filtered);
    return filtered;
  }
}
