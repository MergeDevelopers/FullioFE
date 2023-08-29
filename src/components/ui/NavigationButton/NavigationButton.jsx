import Style from './NavigationButton.style';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NavigationButton({ url, title }) {
  const location = useLocation();
  const pathName = location.pathname;
  const active = pathName === url;
  
  return (
    <Link to={url}>
      <Style.NavButton $active={active}>
      {title}
      </Style.NavButton>
    </Link>
  )
}

export default NavigationButton;
