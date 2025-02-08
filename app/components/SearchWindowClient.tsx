"use client";

import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResultProps } from "./SearchResult";
import { SearchResults } from "./SearchResults";
import styles from "./SearchWindowClient.module.css";
import { getSearchResults, Result } from "./data";

type Props = {
  results: Result[];
};

function toProps(results: Result[]): SearchResultProps[] {
  return results.map((x) => ({ title: x.title, breadCrumbs: x.path }));
}

export function SearchWindowClient(props: Props) {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<SearchResultProps[]>(
    toProps(props.results)
  );

  async function updateSearchText(s: string) {
    setSearchText(s);

    // This can throw an exception
    const searchResults = await getSearchResults(s);
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
