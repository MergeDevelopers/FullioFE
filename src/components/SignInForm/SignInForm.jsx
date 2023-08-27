import Style from './SignInForm.style';
import cancelBlack from '../../assets/images/icons/cancel_gray.png';
import cancelError from '../../assets/images/icons/cancel_red.png';
import { useState } from 'react';
import { validateId, validatePw } from '../../utils/validation/validation';

function SignInForm() {
    const [ signInForm, setSignInForm ] = useState({
        id: '',
        pw: '',
    });
    const [ signInError, setSignInError ] = useState({
        id: false,
        pw: false,
    });

    function handleInput(e) {
        const value = e.target.value;
        const name = e.target.name;
        setSignInForm({
            ...signInForm,
            [name]: value,
        });
    }
    function clearInputValue(e) {
        const name = e.target.name;
        setSignInForm({
            ...signInForm,
            [name]: '',
        });
    }
    function clearErrorMessage(e) {
        const name = e.target.name;
        setSignInError({
            ...signInError,
            [name]: false,
        })
    }
    function submitSignIn() {
        const isValidId = validateId(signInForm.id);
        const isValidPw = validatePw(signInForm.pw);

        if (isValidId && isValidPw){
            alert('로그인');
            return
        }
        setSignInError({
            id: !isValidId,
            pw: !isValidPw,
        })
    }
    return(
        <>
        <Style.SignInContainer>
            <Style.SignInput
                $valid={!signInError.id} 
                name='id' 
                placeholder='아이디' 
                type='text'
                value={signInForm.id}
                onChange={handleInput}
                onFocus={clearErrorMessage}
            />
            { signInForm.id === '' ? 
                <></> :
                <img 
                    name='id' 
                    src={!signInError.id ? cancelBlack : cancelError} 
                    alt='입력취소 버튼' 
                    onClick={clearInputValue}
                /> 
            }
            <p>{!signInError.id ? '' : '아이디를 확인해주세요!'}</p>
        </Style.SignInContainer>
        <Style.SignInContainer>
            <Style.SignInput 
                $valid={!signInError.pw} 
                name='pw' 
                placeholder='비밀번호' 
                type='password'
                value={signInForm.pw}
                onChange={handleInput}
                onFocus={clearErrorMessage}
            />
            { signInForm.pw === '' ?
                <></> :
                <img 
                    name='pw' 
                    src={!signInError.pw ? cancelBlack : cancelError} 
                    alt='입력취소 버튼'
                    onClick={clearInputValue}
                />
            }
            <p>{!signInError.pw ? '' : '비밀번호를 확인해주세요!'}</p>
        </Style.SignInContainer>
        <Style.submitButton onClick={submitSignIn}>로그인</Style.submitButton>
        </>
    )
}

export default SignInForm;
