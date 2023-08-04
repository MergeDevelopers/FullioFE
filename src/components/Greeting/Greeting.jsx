import { Link } from 'react-router-dom';
import Style from './Greeting.style';

const Greeting = ({ name = 'React' }) => {
  return (
    <>
      <Style.Heading>Hello {name}!</Style.Heading>
      <Style.SubText>It uses styled-components to component styling.</Style.SubText>
      <Link to="/signip">회원가입</Link>
    </>
  );
};

export default Greeting;
