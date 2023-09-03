import { keyframes, styled } from "styled-components";
import COLOR from "../../../assets/color";

const Coontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 105px;
  height: 130px;
  cursor: pointer;
`;

const progress = ($angle) =>  keyframes`
  to {
    --angle: ${$angle}deg;
  }
`;

const MainProgressBar = styled.div`
  @property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }

  position: relative;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: ${COLOR.GSD9};
  background-image: conic-gradient(
    ${COLOR.Primary} var(--angle),
    ${COLOR.GSD9} var(--angle) 360deg
    );
  animation: ${({ $angle }) => progress($angle)} 0.5s cubic-bezier(0.3, 1.21, 0.93, 1.08) forwards;

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 12px;
    transform: translate(-50%, -50%);
  }
`;
const InnerProgressBar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-radius: 50%;
  background-color: ${COLOR.White};
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 20px;

  & div {
    text-align: center;
    font-size: 14px;
    overflow: hidden;
  }
`;
export default {
  Coontainer,
  MainProgressBar,
  InnerProgressBar,
  TitleContainer,
};

