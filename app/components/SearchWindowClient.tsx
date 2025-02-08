"use client";

import { startTransition, useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResultProps } from "./SearchResult";
import { SearchResults } from "./SearchResults";
import styles from "./SearchWindowClient.module.css";
import { getSearchResults } from "./data";

type Props = {
  initialSearchText: string;
  initialResultsPromise: Promise<SearchResultProps[]>;
};

export function SearchWindowClient(props: Props) {
  console.log("SearchWindowClient");

  const [searchText, setSearchText] = useState(props.initialSearchText);
  const [results, setResultsPromise] = useState<Promise<SearchResultProps[]>>(
    props.initialResultsPromise
  );

  async function updateSearchText(s: string) {
    setSearchText(s);

    // startTransition() to avoid flickering update.
    //
    // Transitions make the external fetch() call immediately, but the view
    // is swapped only once, when all in-progress transitions are finished.
    startTransition(async () => {
      // Don't use Server Functions but use Route Handlers.
      //
      // Server Actions force requests queued and sequential,
      // so text-search becomes terribly slow if the backend is slow.
      // (e.g.) If the backend returns in 1 second, then typing a 5-letter word,
      //        you will get the result 5 seconds later.
      const promise = getSearchResults(s);
      setResultsPromise(promise); // This can throw an exception
    });
  }

  return (
    <div className={styles.component}>
      <SearchBox searchText={searchText} onChange={updateSearchText} />
      <SearchResults resultsPromise={results} />
      <div className={styles.footer}></div>
    </div>
  );
}
