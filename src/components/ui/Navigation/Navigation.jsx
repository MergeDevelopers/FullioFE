import NavigationButton from "../NavigationButton/NavigationButton";
import Style from './Navigation.style';

function Navigation({ NAV_CATEGORY }) {
  function handleLogout() {
    // TODO: 로그아웃 기능 구현
    alert('로그아웃');
  }
  return (
    <Style.NavContainer>
      <Style.Nav>
        {
          NAV_CATEGORY.map(({url, title}, index) => {
            return <NavigationButton key={index} url={url} title={title}/>
          })
        }
      </Style.Nav>
      <Style.LogoutButton onClick={handleLogout}>로그아웃</Style.LogoutButton>
    </Style.NavContainer>
  );
}

export default Navigation;
