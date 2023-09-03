import { styled } from "styled-components";
import COLOR from "../../assets/color";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 736px;
  background-color: ${COLOR.White};
  border-radius: 8px;
  padding: 20px 17px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`;

const NoticeImage = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 17px;
  cursor: pointer;
`;

const BasicInfoContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 6px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  & span {
    font-size: 16px;
  }
  & p {
    font-size: 14px;
    margin: 0;
  }
`;

const MypageButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  background-color: ${COLOR.Primary};
  color: ${COLOR.White};
  font-size: 16px;
  border: none;
  margin: 16px 0;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.PrimaryDark};
  }
`;

const CommentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 78px;
  border-radius: 8px;
  border: 1px solid ${COLOR.Secondary};
  font-size: 14px;

  & p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 50px;
    margin: 0;
    text-align: center;
  }
`;

export default {
  Container,
  NoticeImage,
  BasicInfoContainer,
  MypageButton,
  CommentContainer,
};
