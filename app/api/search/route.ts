import { promises as fs } from "fs";
import { NextRequest } from "next/server";
import { setTimeout } from "timers/promises";
import { Result } from "./types";

export async function GET(request: NextRequest) {
  console.log("GET", request.nextUrl.href);

  await setTimeout(2000);

  const fileContents = await fs.readFile(
    process.cwd() + "/app/api/search/data.json",
    "utf8"
  );
  const data = JSON.parse(fileContents) as Result[];

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (query) {
    const queried = data.filter((x) => x.title.includes(query));
    console.log("GET filtered", queried);

    return Response.json(queried);
  } else {
    console.log("GET all", data);
    return Response.json(data);
  }
}
