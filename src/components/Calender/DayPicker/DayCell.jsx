import { updatePickedDay } from "../../../store/calenderSlice";
import Style from "./DayCell.style";
import { useDispatch, useSelector } from 'react-redux';

function DayCell({ children }) {
  const pickedDays = useSelector((state) => state.pickDate.pickDay);
  const dispatch = useDispatch();

  function isPicked() {
    return pickedDays.includes(children);
  }

  function isActiveLeft() {
    if(pickedDays.length !== 2) return false;
    const [ firstDay, lastDay ] = pickedDays;
    if(firstDay < children && lastDay >= children) return true;
    return false;
  }
  
  function isActiveRight() {
    if(pickedDays.length !== 2) return false;
    const [ firstDay, lastDay ] = pickedDays;
    if(firstDay <= children && lastDay > children) return true;
    return false;
  }

  function togglePicked() {
    dispatch(updatePickedDay(children));
  }
  return (
    <Style.DayCellContainer onClick={togglePicked}>
      <Style.PickedCircle $isPicked={isPicked()}>{children}</Style.PickedCircle>
      <Style.PickedLeft $isActiveLeft={isActiveLeft()}></Style.PickedLeft>
      <Style.PickedRight $isActiveRight={isActiveRight()}></Style.PickedRight>
    </Style.DayCellContainer>
  )
}

export default DayCell;
