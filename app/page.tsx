import { SearchWindow } from "./components/SearchWindow";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <SearchWindow />
    </div>
  );
}
