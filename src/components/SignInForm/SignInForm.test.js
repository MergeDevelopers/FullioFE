/*
시나리오
1. 아이디 input에 값'1234567'를 넣고 로그인 버튼을 누르면 '아이디를 확인하세요!' 라는 문구가 뜬다.
2. 비밀번호 input에 값 '123'을 넣고 로그인 버튼을 누르면 '비밀번호를 확인하세요!' 라는 문구가 뜬다.
3. 아이디 input에 값'12345678'을 넣고 비밀번호 input에 값 '123'을 넣으면 '아이디를 확인하세요!'라는 문구는 안뜨고 '비밀번호를 확인하세요!'라는 문구가 뜬다.
4. 아이디 input에 값'123'을 넣고 비밀번호 input에 값 '123123'을 넣으면 '비밀번호를 확인하세요!'라는 문구는 안뜨고 '아이디를 확인하세요!'라는 문구가 뜬다.
5. 아이디 input에 값 '12345678'을 넣고 비밀번호 input에 값 '123123'을 넣으면 '로그인'이라는 alert 창이 뜬다.
6. 아이디 input에 '1'이 입력되면 img태그가 있다.
7. 아이디 input에 값이 없으면 img태그가 없다.
8. 비밀번호 input에 '1'이 입력되면 img태그가 있다.
9. 비밀번호 input에 값이 없으면 img 태그가 없다.
*/

import { render, fireEvent } from '@testing-library/react';
import SignInForm from './SignInForm';

describe('SignInForm 컴포넌트', () => {
    it('아이디 input에 값 "1234567"를 넣고 로그인 버튼을 누르면 "아이디를 확인하세요!" 라는 문구가 뜬다.', () => {
        const { getByPlaceholderText, getByText } = render(<SignInForm />);
        const idInput = getByPlaceholderText('아이디');
        const loginButton = getByText('로그인');
      
        fireEvent.change(idInput, { target: { value: '1234567' } });
        fireEvent.click(loginButton);
      
        const errorMessage = getByText('아이디를 확인하세요!');
        expect(errorMessage).toBeInTheDocument();
    });
    it('비밀번호 input에 값 "123"을 넣고 로그인 버튼을 누르면 "비밀번호를 확인하세요!" 라는 문구가 뜬다.', () => {
        const { getByPlaceholderText, getByText } = render(<SignInForm />);
        const pwInput = getByPlaceholderText('비밀번호');
        const loginButton = getByText('로그인');
      
        fireEvent.change(pwInput, { target: { value: '123' } });
        fireEvent.click(loginButton);
      
        const errorMessage = getByText('비밀번호를 확인하세요!');
        expect(errorMessage).toBeInTheDocument();
    });
    it('아이디 input에 값 "12345678"을 넣고 비밀번호 input에 값 "123"을 넣으면 "아이디를 확인하세요!" 라는 문구는 안뜨고 "비밀번호를 확인하세요!" 라는 문구가 뜬다.', () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<SignInForm />);
        const idInput = getByPlaceholderText('아이디');
        const pwInput = getByPlaceholderText('비밀번호');
        const loginButton = getByText('로그인');
      
        fireEvent.change(idInput, { target: { value: '12345678' } });
        fireEvent.change(pwInput, { target: { value: '123' } });
        fireEvent.click(loginButton);
      
        const idErrorMessage = queryByText('아이디를 확인하세요!');
        const pwErrorMessage = getByText('비밀번호를 확인하세요!');
        expect(idErrorMessage).not.toBeInTheDocument();
        expect(pwErrorMessage).toBeInTheDocument();
    });
    it('아이디 input에 값 "123"을 넣고 비밀번호 input에 값 "123123"을 넣으면 "비밀번호를 확인하세요!" 라는 문구는 안뜨고 "아이디를 확인하세요!" 라는 문구가 뜬다.', () => {
        const { getByPlaceholderText, getByText, queryByText } = render(<SignInForm />);
        const idInput = getByPlaceholderText('아이디');
        const pwInput = getByPlaceholderText('비밀번호');
        const loginButton = getByText('로그인');
      
        fireEvent.change(idInput, { target: { value: '123' } });
        fireEvent.change(pwInput, { target: { value: '123123' } });
        fireEvent.click(loginButton);
      
        const idErrorMessage = getByText('아이디를 확인하세요!');
        const pwErrorMessage = queryByText('비밀번호를 확인하세요!');
        expect(idErrorMessage).toBeInTheDocument();
        expect(pwErrorMessage).not.toBeInTheDocument();
    });
    it('아이디 input에 값 "12345678"을 넣고 비밀번호 input에 값 "123123"을 넣으면 "로그인"이라는 alert 창이 뜬다.', () => {
        const { getByPlaceholderText, getByText } = render(<SignInForm />);
        const idInput = getByPlaceholderText('아이디');
        const pwInput = getByPlaceholderText('비밀번호');
        const loginButton = getByText('로그인');
      
        fireEvent.change(idInput, { target: { value: '12345678' } });
        fireEvent.change(pwInput, { target: { value: '123123' } });
        fireEvent.click(loginButton);
      
        expect(window.alert).toHaveBeenCalledWith('로그인');
    });
    it('아이디 input에 "1"이 입력되면 img태그가 있다.', () => {
        const { getByPlaceholderText, getByAltText } = render(<SignInForm />);
        const idInput = getByPlaceholderText('아이디');
      
        fireEvent.change(idInput, { target: { value: '1' } });
      
        const cancelImg = getByAltText('입력취소 버튼');
        expect(cancelImg).toBeInTheDocument();
    });
    it('아이디 input에 값이 없으면 img태그가 없다.', () => {
        const { getByPlaceholderText, queryByAltText } = render(<SignInForm />);
        const idInput = getByPlaceholderText('아이디');
      
        fireEvent.change(idInput, { target: { value: '' } });
      
        const cancelImg = queryByAltText('입력취소 버튼');
        expect(cancelImg).not.toBeInTheDocument();
    });
    it('비밀번호 input에 "1"이 입력되면 img태그가 있다.', () => {
        const { getByPlaceholderText, getByAltText } = render(<SignInForm />);
        const pwInput = getByPlaceholderText('비밀번호');
      
        fireEvent.change(pwInput, { target: { value: '1' } });
      
        const cancelImg = getByAltText('입력취소 버튼');
        expect(cancelImg).toBeInTheDocument();
    });
    it('비밀번호 input에 값이 없으면 img 태그가 없다.', () => {
        const { getByPlaceholderText, queryByAltText } = render(<SignInForm />);
        const pwInput = getByPlaceholderText('비밀번호');
      
        fireEvent.change(pwInput, { target: { value: '' } });
      
        const cancelImg = queryByAltText('입력취소 버튼');
        expect(cancelImg).not.toBeInTheDocument();
    });
});
