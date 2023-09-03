import { useState } from "react";
import Style from "./Calender.style";
import DayPicker from "./DayPicker/DayPicker";
import { useEffect } from "react";
import { getCalenderInfo } from "../../utils/Calender/getCalenderInfo";
import { useDispatch } from 'react-redux';
import { clearPickedDay } from "../../store/calenderSlice";

const MONTH_NAMES_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Calender() {
  const [ selectedDate, setSelectedDate ] = useState(new Date());
  const [ calenderInfo , setCalenderInfo ] = useState({
    currentYear: 2023,
    currentMonthIndex: 0,
    daysInCurrenMonth: 31,
    firstDayOfWeekIndex: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const getDateInfo = getCalenderInfo(selectedDate);
    setCalenderInfo(getDateInfo);
  }, [selectedDate]);

  function prevMonth () {
    const prevMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1);
    setSelectedDate(prevMonth);
    dispatch(clearPickedDay());
  }
  function nextMonth () {
    const nextMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1);
    setSelectedDate(nextMonth);
    dispatch(clearPickedDay());
  }

  return (
      <Style.CalenderContainer>
        <Style.CalenderHeader>
          <div>
            <span>{MONTH_NAMES_SHORT[calenderInfo.currentMonthIndex]}</span>
            <span>{` ${calenderInfo.currentYear}`}</span>
          </div>
          <div>
            <button onClick={prevMonth}>왼</button>
            <button onClick={nextMonth}>오</button>
          </div>
        </Style.CalenderHeader>
        <Style.CalenderContent>
          <DayPicker calenderInfo={calenderInfo} />
        </Style.CalenderContent>
        <Style.CalenderFooter>
          {/* TODO: text and 글 수정 */}
        </Style.CalenderFooter>
      </Style.CalenderContainer>
  )
}

export default Calender;
