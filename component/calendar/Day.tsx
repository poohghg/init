import { memo } from "react";

interface Props {
  date: number;
  // 추후 키값으로 사용될 확률이 높음
  strDate: string;
  flag?: string;
}

const Day = ({ date, strDate, flag }: Props) => {
  return <div className={strDate}>{date}</div>;
};

export default memo(Day);
