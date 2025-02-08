import { getSearchResults } from "./data";
import { SearchWindowClient } from "./SearchWindowClient";

type Props = {};

export async function SearchWindowServer(props: Props) {
  const results = await getSearchResults("");
  console.log("SearchWindowServer", results);
  return <SearchWindowClient results={results} />;
}
