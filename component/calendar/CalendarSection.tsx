import { memo, useState } from "react";
import { YYMMType } from "@/types/calendat";
import MonthDates from "@/component/calendar/MonthList";
import styled from "styled-components";

interface Props {}

function getYYMM(): YYMMType {
  const today = new Date();
  return { year: today.getFullYear(), month: today.getMonth() + 1 };
}

const CalendarSection = ({}: Props) => {
  const [selectedYYMM, setSelectedYYMM] = useState<YYMMType>(getYYMM());

  const handleMoveMonth = (flag: "prev" | "next") => {
    let { year, month } = selectedYYMM;
    month = flag === "prev" ? --month : ++month;

    const d = new Date(year, month, 0);
    setSelectedYYMM({ year: d.getFullYear(), month: d.getMonth() + 1 });
  };

  return (
    <>
      <div>
        <Button onClick={() => handleMoveMonth("prev")}>이전</Button>
        <h1>
          {selectedYYMM.year}/{selectedYYMM.month}
        </h1>
        <Button onClick={() => handleMoveMonth("next")}>다음</Button>
      </div>
      <MonthWrap>
        <MonthDates {...selectedYYMM} />
      </MonthWrap>
    </>
  );
};

export default memo(CalendarSection);

const Button = styled.button`
  width: 74px;
  height: 50px;
  color: black;
`;

const MonthWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
