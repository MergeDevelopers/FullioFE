
import DayCell from "./DayCell";
import Style from "./DayPicker.style";
import { useSelector } from 'react-redux';
const WEEK_TITLE = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function DayPicker ({ calenderInfo }) {
  const pickedDays = useSelector((state) => state.pickDate.pickDay);
  const { firstDayOfWeekIndex, daysInCurrenMonth } = calenderInfo;
  const totalCells = 42;
  const afterCells = totalCells - firstDayOfWeekIndex - daysInCurrenMonth;

  function generateBeforeCells () {
    const beforeDays = [];
    for(let i = 0; i < firstDayOfWeekIndex; i++) {
      beforeDays.push(<div key={`prev-${i}`}></div>);
    } 
    return beforeDays;
  }
  function generateDaysCells () {
    const days = [];
    for(let i = 1; i <= daysInCurrenMonth; i++) {
      days.push(<DayCell key={`day-${i}`}>{i}</DayCell>);
    }
    return days;
  }
  function generateAfterCells () {
    const afterDays = [];
    for(let i = 1; i <= afterCells; i++) {
      afterDays.push(<Style.afterCell key={`next-${i}`}>{i}</Style.afterCell>);
    }
    return afterDays;
  }
  return (
    <>
      <Style.PickerWeeks>
      {WEEK_TITLE.map((title, index) => {
        return <div key={index}>{title}</div>
      })}
      </Style.PickerWeeks>
      <Style.PickerContainer>
        {generateBeforeCells().map((cell) => cell)}
        {generateDaysCells().map((cell) => cell)}
        {generateAfterCells().map((cell) => cell)}
      </Style.PickerContainer>
    </>
  )
}

export default DayPicker;
