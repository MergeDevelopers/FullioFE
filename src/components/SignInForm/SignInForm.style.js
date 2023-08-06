import styled from 'styled-components';
import COLOR from '../../assets/color';

const SignInput = styled.input`
    width: 352px;
    height: 52px;
    background-color: ${COLOR.GSF0};
    border: ${props => props.$valid ? 'none' : `2px solid ${COLOR.ERROR}`};
    border-radius: 8px;
    padding: 14px 56px 14px 16px;
    position: relative;
    font-size: 16px;

    &::placeholder {
        color: ${COLOR.GSBF};
    }
`;
const SignInContainer = styled.div`
    position: relative;
    margin: 0 auto;
    & > p {
        display: block;
        height: 24px;
        color: ${COLOR.ERROR};
        font-size: 12px;
        padding: 4px 10px;
        margin: 0;
    }
    & > img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 16px;
        right: 18px;
        cursor: pointer;
    }
`;
const submitButton = styled.button`
    width: 352px;
    height: 52px;
    border: 1px solid ${COLOR.Primary};
    border-radius: 8px;
    color: ${COLOR.Primary};
    background-color: ${COLOR.White};
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: ${COLOR.Primary};
        color: ${COLOR.White};
    }
`;

export default { SignInput, SignInContainer, submitButton };