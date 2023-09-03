import { keyframes, styled } from "styled-components";
import COLOR from "../../../assets/color";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 755px;
  height: 32px;
`;

const Title = styled.h4`
  display: block;
  width: 120px;
  height: inherit;
  margin: 0;
  text-align: center;
  line-height: 32px;
  background-color: ${({ $color }) => `#${$color}`};
  color: ${COLOR.White};
  font-weight: 500;
  border-radius: 20px;
`;
const progressAnimation = ($records) => keyframes`
  to {
    width: ${$records * 20}px;
  }
`;
const BarContainer = styled.div`
  position: relative;
  width: 620px;
  height: inherit;
  background-color: ${COLOR.GSF0};
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.20) inset;
  border-radius: 20px;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 32px;
    background-color: ${({ $color }) => `#${$color}` || "white"};
    border-radius: 20px;
    animation: ${({ $records }) => progressAnimation($records)} 0.5s cubic-bezier(0.3, 1.21, 0.93, 1.08) forwards;
  }
  & > div > div {
    position: relative;
    width: 100%;
    height: 32px;
  }
  & > div > div > span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color: ${COLOR.White};
  }
`;

export default {
  Container,
  Title,
  BarContainer,
};
