import styles from "./Icon.module.css";

type Props = {
  name: string;
};

export function Icon(props: Props) {
  return (
    <span className={"material-symbols-outlined " + styles.component}>
      {props.name}
    </span>
  );
}
