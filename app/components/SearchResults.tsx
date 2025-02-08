import { use } from "react";
import { SearchResult, SearchResultProps } from "./SearchResult";
import styles from "./SearchResults.module.css";

type Props = {
  resultsPromise: Promise<SearchResultProps[]>;
};

export function SearchResults(props: Props) {
  // use(), to avoid race conditions
  // https://github.com/facebook/react/issues/28914
  const results = use(props.resultsPromise);

  return (
    <div className={styles.component}>
      {results.map((x, i) => (
        <SearchResult key={i} title={x.title} breamdCrumbs={x.breamdCrumbs} />
      ))}
    </div>
  );
}
