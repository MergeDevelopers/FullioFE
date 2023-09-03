import { styled } from "styled-components";
import COLOR from "../../assets/color";

const Container = styled.div`
  width: 100%;
  background-color: ${COLOR.White};
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);

  & h3 {
    margin: 0;
    font-weight: 400;
    margin-left: 16px;
    line-height: 40px;
  }
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
`;

export default {
  Container,
  ContentsContainer,
};
