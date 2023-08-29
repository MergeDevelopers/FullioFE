import { styled } from "styled-components";

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 88px auto 0;
  width: fit-content;
  gap: 16px;
  
  & > a {
    position: absolute;
    top: -72px;
    left: 0;
  }
`;
const SrOnly = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  top: -72px;
  left: 0;
`;
const ContentsGrid = styled.div`
  display: grid;
  grid-template-columns: 332px 448px 332px;
  grid-template-rows: 56px 115px 194px 319px;
  grid-gap: 16px;

  & div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }
  & div:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  & div:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  & div:nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  & div:nth-child(5) {
    grid-column: 3 / 4;
    grid-row: 1 / 5;
  }
  & div:nth-child(6) {
    grid-column: 1 / 4;
    grid-row: 4 / 5;
  }
`;

const LogoImage = styled.img`
  width:37px;
  height: 56px;
`;

export default {
  LayoutContainer,
  ContentsGrid,
  LogoImage,
  SrOnly,
}
