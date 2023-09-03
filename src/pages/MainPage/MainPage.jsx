import Style from "./MainPage.style";
import logoBook from "../../assets/images/logo/Logo_book.png";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/path";
import Navigation from "../../components/ui/Navigation/Navigation";
import { MAIN_NAV } from "../../constants/NAV_CATEGORY.JS";
import Calender from "../../components/Calender/Calender";
import SearchBar from "../../components/SeachBar/SearchBar";

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
        <div>activity</div>
        <div>my skill</div>
        <div>info</div>
        <div>month record</div>
      </Style.ContentsGrid>
    </Style.LayoutContainer>
  );
}

export default MainPage;
