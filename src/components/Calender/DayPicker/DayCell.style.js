import { styled } from "styled-components";
import COLOR from "../../../assets/color";

const DayCellContainer = styled.div`
  position: relative;
  height: 32px;
  cursor: pointer;
`;

const PickedCircle = styled.div`
  position: absolute;
  top: 0;
  left: calc((100% - 32px) / 2);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ $isPicked }) => $isPicked ? COLOR.SecondaryDark : ''};
  color: ${({ $isPicked }) => $isPicked ? COLOR.White : COLOR.Black};
  text-align: center;
  z-index: 1000;
  line-height: 30px;

  &:hover {
    background-color: ${COLOR.SecondaryDark};
    color: ${COLOR.White};
  }
`;
const PickedLeft = styled.div`
  position: absolute;
  width: 50%;
  height: 32px;
  background-color: ${({ $isActiveLeft }) => $isActiveLeft ? COLOR.SecondaryLight : ''};
  top: 0;
  left: 0;
  z-index: 900;
`;
const PickedRight = styled.div`
  position: absolute;
  width: 50%;
  height: 32px; 
  background-color: ${({ $isActiveRight }) => $isActiveRight ? COLOR.SecondaryLight : ''};
  top: 0;
  right: 0;
  z-index: 900;
`;
export default {
  DayCellContainer,
  PickedCircle,
  PickedLeft,
  PickedRight,
};
