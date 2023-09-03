import { styled } from "styled-components";
import COLOR from "../../assets/color";

const CalenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.White};
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
  padding: 16px;
`;

const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const CalenderContent = styled.div`

`;
const CalenderFooter = styled.div`
  border-top: 1px solid ${COLOR.Black};
`;

export default {
  CalenderContainer,
  CalenderHeader,
  CalenderContent,
  CalenderFooter,
};
