import { memo, ReactElement, useMemo } from "react";
import Day from "@/component/calendar/Day";
import { DateFlag, DatType } from "@/types/calendat";

function getDateAndDay(year: number, month: number, date: number = 0) {
  const d = new Date(year, month, date);
  return { date: d.getDate(), day: d.getDay() };
}

interface Props {
  year: number;
  month: number;
}

const MonthList = ({ year, month }: Props) => {
  // 캘린더 달의 데이터는 서버데이터와 따로 관리한다.
  const generateDays = useMemo(() => {
    const pushData = (
      list: DatType[],
      date: number,
      year: number,
      month: number,
      flag: DateFlag = "this"
    ) => {
      const strDate = year.toString() + month + toString() + date.toString();
      list.push({ date, strDate, flag });
    };

    const days: DatType[] = [];
    const { date: prevDate, day: prevDay } = getDateAndDay(year, month - 1);
    const { date: thisDate, day: thisDay } = getDateAndDay(year, month);
    const remainingDays = 7 - thisDay == 7 ? 0 : 7 - thisDay;

    // 이전달 데이터를 생성한다.

    for (let i = prevDate - prevDay + 1; i <= prevDate; i++)
      pushData(days, i, year, month - 1, "prev");
    for (let i = 1; i <= thisDate; i++) pushData(days, i, year, month);
    for (let i = 1; i <= remainingDays; i++)
      pushData(days, i, year, month + 1, "next");

    return days;
  }, [year, month]);

  return (
    <>
      {generateDays.map((info) => (
        <Day key={info.strDate} {...info} />
      ))}
    </>
  );
};

export default memo(MonthList);
