import styles from "./SearchBox.module.css";

type Props = {};

export function SearchBox(props: Props) {
  return (
    <form action="/static-search/results">
      <input name="searchtext" />
      <button type="submit">search</button>
    </form>
  );
}
