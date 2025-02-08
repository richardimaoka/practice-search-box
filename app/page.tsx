import { App } from "./App";
import { SearchWindowServer } from "./components/SearchWindowServer";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <App />
    </div>
  );
}
