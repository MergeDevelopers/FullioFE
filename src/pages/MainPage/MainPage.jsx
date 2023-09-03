import Style from "./MainPage.style";
import logoBook from "../../assets/images/logo/Logo_book.png";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/path";
import Navigation from "../../components/ui/Navigation/Navigation";
import { MAIN_NAV } from "../../constants/NAV_CATEGORY.JS";
import Calender from "../../components/Calender/Calender";
import SearchBar from "../../components/SeachBar/SearchBar";
import ActivityCounter from "../../components/ActivityCounter/ActivityCounter";
import MySkill from "../../components/MySkill/MySkill";
import MonthRecord from "../../components/MonthRecord/MonthRecord";
import AsideUserInfo from "../../components/AsideUserInfo/AsideUserInfo";

function MainPage() {
  return (
    <Style.LayoutContainer>
      <Link to={ROUTE_PATHS.home}>
        <Style.SrOnly>Fullio</Style.SrOnly>
        <Style.LogoImage src={logoBook} />
      </Link>
      <Navigation NAV_CATEGORY={MAIN_NAV}/>
      <Style.ContentsGrid>
        <Calender />
        <SearchBar />
        <ActivityCounter />
        <MySkill />
        <AsideUserInfo />
        <MonthRecord />
      </Style.ContentsGrid>
    </Style.LayoutContainer>
  );
}

export default MainPage;
