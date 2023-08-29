import { styled } from "styled-components";
import COLOR from "../../../assets/color";

const Nav = styled.nav`
  width: 216px;
  height: 233px;
  padding: 22px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLOR.White};
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`;
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LogoutButton = styled.button`
  width: 100%;
  height: 52px;
  font-size: 16px;
  background-color: ${COLOR.White};
  border: 1px solid ${COLOR.ERROR};
  color: ${COLOR.ERROR};
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
  
  &:hover {
    background-color: ${COLOR.ERROR};
    color: ${COLOR.White};
  }
`;
export default { 
  Nav, 
  NavContainer,
  LogoutButton,
};
