import styles from "./SearchResult.module.css";
import { Icon } from "./Icon";
import Link from "next/link";

type Props = {
  title: string;
  breamdCrumbs?: string[];
};

export type SearchResultProps = Props;

export function SearchResult(props: Props) {
  const breadCrumb = props.breamdCrumbs
    ? props.breamdCrumbs
    : ["Front Snippet DB", "Small Components"];

  return (
    <Link href="/" className={styles.component}>
      <Icon name={"description"} />
      <div className={styles.text}>
        <span className={styles.title}>{props.title}</span>
        <span>-</span>
        <span className={styles.breadcrumb}>
          Front Snippet Databases / Components
        </span>
      </div>
    </Link>
  );
}
