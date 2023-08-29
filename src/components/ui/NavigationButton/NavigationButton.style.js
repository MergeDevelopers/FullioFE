import { styled } from "styled-components";
import COLOR from "../../../assets/color";

const NavButton = styled.button`
  width: 100%;
  height: 52px;
  font-size: 16px;
  background-color: ${({ $active }) => $active ? COLOR.Primary : COLOR.White};
  border: 1px solid ${COLOR.Primary};
  color: ${({ $active }) => $active ? COLOR.White : COLOR.Primary};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.Primary};
    color: ${COLOR.White};
  }
`;

export default {
  NavButton,
};
