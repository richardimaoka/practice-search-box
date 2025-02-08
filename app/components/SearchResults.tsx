import { SearchResult, SearchResultProps } from "./SearchResult";
import styles from "./SearchResults.module.css";

type Props = {
  results: SearchResultProps[];
};

export function SearchResults(props: Props) {
  return (
    <div className={styles.component}>
      {props.results.map((x, i) => (
        <SearchResult key={i} title={x.title} breamdCrumbs={x.breamdCrumbs} />
      ))}
    </div>
  );
}
