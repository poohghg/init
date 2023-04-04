import { memo, useMemo, useState } from "react";

interface Props {}

type TypeYYMM = [number, number];

function getTodayYYMM(): TypeYYMM {
  const today = new Date();
  return [today.getFullYear(), today.getMonth() + 1];
}

const CalendarSection = ({}: Props) => {
  const [selectedYYMM, setSelectedYYMM] = useState<TypeYYMM>(getTodayYYMM());
  console.log("selectDate", selectedYYMM);

  const selectedYYMMDaysInfo = useMemo(() => {
    const [year, month] = selectedYYMM;
    const selectedMMLength = new Date(year, Number(month), 0).getDate();
    // const selectedMMDates = Array.from({});
    console.log("selectedMMLength", selectedMMLength);
    return null;
  }, [selectedYYMM]);

  return null;
};

export default memo(CalendarSection);
