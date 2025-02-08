import React from "react";
import styles from "./SearchBox.module.css";

type Props = {
  searchText: string;
  onChange?: (s: string) => void;
};

export function SearchBox(props: Props) {
  // Using onKeyUp() because:
  //  onChange() does not fire upon (日本語変換 ->) Enter
  //  onKeyDown() has the pre-change value in e.currentTarget.value
  function onKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    // isComposing === true, while 日本語変換
    if (props.onChange && !e.nativeEvent.isComposing) {
      props.onChange(e.currentTarget.value);
    }
  }

  // Click-away while 日本語変換
  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (props.onChange && props.searchText !== e.currentTarget.value) {
      props.onChange(e.currentTarget.value);
    }
  }

  return (
    <div className={styles.component}>
      <span className="material-symbols-outlined">search</span>
      <input className={styles.input} onKeyUp={onKeyUp} onBlur={onBlur} />
      <span className="material-symbols-outlined">filter_list</span>
    </div>
  );
}
