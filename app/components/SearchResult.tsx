import styles from "./SearchResult.module.css";
import { Icon } from "./Icon";
import Link from "next/link";

type Props = {
  text: string;
};

export function SearchResult(props: Props) {
  return (
    <Link href="/" className={styles.component}>
      <Icon name={"description"} />
      <span className={styles.text}>{props.text}</span>
    </Link>
  );
}
