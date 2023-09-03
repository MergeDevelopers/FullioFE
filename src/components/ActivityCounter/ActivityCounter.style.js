import { styled } from "styled-components";
import COLOR from "../../assets/color";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 115px;
  border-radius: 8px;
  background-color: ${COLOR.White};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);

  & span {
    font-size: 24px;
  }
  & strong{
    font-size: 34px;
  }
  & p {
    font-size: 16px;
  }
`;

export default {
  CounterContainer,
  MainContainer,
};
