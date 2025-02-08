"use client";

import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResultProps } from "./SearchResult";
import { SearchResults } from "./SearchResults";
import styles from "./SearchWindowClient.module.css";
import { getSearchResults } from "./data";

type Props = {
  initialSearchText: string;
  initialResults: SearchResultProps[];
};

export function SearchWindowClient(props: Props) {
  console.log("SearchWindowClient");

  const [searchText, setSearchText] = useState(props.initialSearchText);
  const [results, setResults] = useState<SearchResultProps[]>(
    props.initialResults
  );

  async function updateSearchText(s: string) {
    setSearchText(s);

    // Don't use Server Functions but use Route Handlers.
    //
    // Server Actions force requests queued and sequential,
    // so text-search becomes terribly slow if the backend is slow.
    //
    // (e.g.) If the backend returns in 1 second, then typing a 5-letter word,
    //        you will get the result 5 seconds later.
    const searchResults = await getSearchResults(s); // This can throw an exception
    setResults(searchResults);
  }

  return (
    <div className={styles.component}>
      <SearchBox searchText={searchText} onChange={updateSearchText} />
      <SearchResults results={results} />
      <div className={styles.footer}></div>
    </div>
  );
}
