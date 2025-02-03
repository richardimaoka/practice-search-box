import styles from "./page.module.css";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page(props: Props) {
  console.log(await props.searchParams);
  // const results = await ... (search params)
  return <div className={styles.component}>results</div>;
}
