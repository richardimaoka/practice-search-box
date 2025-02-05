import styles from "./SearchBox.module.css";

type Props = {};

export function SearchBox(props: Props) {
  return (
    <div className={styles.component}>
      <span className="material-symbols-outlined">search</span>
      <input className={styles.input} />
      <span className="material-symbols-outlined">filter_list</span>
    </div>
  );
}
