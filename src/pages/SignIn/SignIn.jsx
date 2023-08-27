import SignInForm from "../../components/SignInForm/SignInForm";
import Style from "./SignIn.style";
import logo from "../../assets/images/logo/Logo.png";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { WaveCanvas } from "../../utils/wave/Canvas";

function SignIn() {
    const [ loadedAni, setLoadedAni ] = useState('');
    const [ isAnimate, setIsAnimate ] = useState(true);
    const container = useRef(null);
    const canvas = useRef(null);

    useEffect(() => {
        setLoadedAni('signin_post_animation');
        new WaveCanvas(canvas.current, container.current);
    }, [isAnimate]);

    function handleWave() {
        setIsAnimate(!isAnimate);
        if(isAnimate) {
            canvas.current.style.setProperty('display', 'none');
        } else {
            canvas.current.style.setProperty('display', 'block');
        }
    }
    return(
        <>
            <Style.Background>
                <Style.SignInContainer className={`signin_pre_animation ${loadedAni}`}>
                    <Style.TitleContainer>
                        <span>오늘의 나를 담아 내일로,</span>
                        <h1 className="sr_only">Fullio</h1>
                        <img src={logo} alt="Fullio 로고" />
                    </Style.TitleContainer>
                    <SignInForm />
                </Style.SignInContainer>
                <Style.CanvasContainer ref={container} onClick={handleWave}>
                    <canvas className="wave_canvas" ref={canvas} width={'2000px'} height={'600px'} ></canvas>
                </Style.CanvasContainer>
            </Style.Background>
        </>
    )
}

export default SignIn;