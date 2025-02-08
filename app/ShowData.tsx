import { fetchData1, useData } from "./data";

type Props = {
  dataKey: number;
};

export const ShowData = ({ dataKey }: Props) => {
  const data = useData(`ShowData:${dataKey}`, fetchData1);
  return (
    <p>
      Data for {dataKey} is {data}
    </p>
  );
};
