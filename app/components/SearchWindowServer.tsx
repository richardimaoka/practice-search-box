import { getSearchResults } from "./data";
import { SearchWindowClient } from "./SearchWindowClient";

type Props = {};

export async function SearchWindowServer(props: Props) {
  console.log("SearchWindowServer");
  // Don't use Server Functions but use Route Handlers.
  //
  // Server Actions force requests queued and sequential,
  // so text-search becomes terribly slow if the backend is slow.
  //
  // (e.g.) If the backend returns in 1 second, then typing a 5-letter word,
  //        you will get the result 5 seconds later.
  const results = getSearchResults("");

  return (
    <SearchWindowClient initialSearchText="" initialResultsPromise={results} />
  );
}
