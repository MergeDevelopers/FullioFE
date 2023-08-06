import { styled } from "styled-components";
import COLOR from "../../assets/color";
const Background = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: calc((100vh - 576px)/2);
    position: relative;
`;
const SignInContainer = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20);
    position: relative;
    width: 448px;
    height: 576px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.White};
    margin: 0 auto;
    z-index: 10;
`;
const TitleContainer = styled.div`
    width: 100%;
    position: relative;
    text-align: center;
    margin-bottom: 33px;

    & > span {
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 1.25px;
    }
    & > h1 {
        position: absolute;
        top: 20px;
        width: 352px;
        left: 48px;
    }
    & > img {
        width: 352px;
        height: 78px;
        margin: 0 auto;
        transition: 0.5s;
    }
    & > img:hover {
        transform: scale(120%);
    }
`;

const CanvasContainer = styled.div`
    position: absolute;
    bottom: 4px;
    width: 100vw;
    height: 30vh;
    cursor: pointer;
    z-index: 1;
`;

export default { 
    SignInContainer, 
    TitleContainer,
    Background,
    CanvasContainer,
};