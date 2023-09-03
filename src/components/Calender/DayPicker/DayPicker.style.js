import { styled } from "styled-components";
import COLOR from "../../../assets/color";

const PickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  
  & > div {
    width: calc(100% / 7);
    margin-bottom: 8px;
  }
`;
const PickerWeeks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  & > div {
    text-align: center;
    width: calc(100% / 7);
  }
`;

const afterCell = styled.div`
  color: ${COLOR.GSD9};
`;

export default {
  PickerContainer,
  PickerWeeks,
  afterCell,
};
