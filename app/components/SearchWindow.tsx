import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import styles from "./SearchWindow.module.css";

type Props = {};

export function SearchWindow(props: Props) {
  return (
    <div className={styles.component}>
      <SearchBox />
      <SearchResults />
      <div className={styles.footer}></div>
    </div>
  );
}
