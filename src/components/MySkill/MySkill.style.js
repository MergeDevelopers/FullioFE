import { styled } from "styled-components";
import COLOR from "../../assets/color";

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${COLOR.White};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
  padding: 16px;

  & h3 {
    margin: 0;
    font-weight: 500;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
export default {
  Container,
  ContentsContainer,
};
