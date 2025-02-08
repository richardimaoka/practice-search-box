import styles from "./SearchBox.module.css";

type Props = {
  searchText: string;
  onChange?: (s: string) => void;
};

export function SearchBox(props: Props) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  }

  return (
    <div className={styles.component}>
      <span className="material-symbols-outlined">search</span>
      <input className={styles.input} onChange={onChange} />
      <span className="material-symbols-outlined">filter_list</span>
    </div>
  );
}
