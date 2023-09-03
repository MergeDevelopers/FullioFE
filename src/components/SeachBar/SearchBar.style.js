import { styled } from "styled-components";
import COLOR from "../../assets/color";
import searchImage from "../../assets/images/icons/search_button.png";

const SearchBarContainer = styled.form`
  position: relative;
`;
const SearchBarIcon = styled.button`
  position: absolute;
  top: 50%;
  left: 16px;
  border: none;
  background-color: ${COLOR.White};
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-image: url(${searchImage});
  background-size: cover;
  cursor: pointer;
`;
const SearchInput = styled.input`
  padding: 10px 10px 10px 48px;
  font-size: 16px;
  border: 2px solid ${COLOR.GSD9};
  background-color: ${COLOR.White};
  width: 100%;
  height: 56px;
  border-radius: 8px;
`;
export default {
  SearchBarContainer,
  SearchBarIcon,
  SearchInput,
};
