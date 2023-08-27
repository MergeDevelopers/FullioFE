import Style from "./MainPage.style";
import logoBook from "../../assets/images/logo/Logo_book.png";
import { Link } from "react-router-dom";
import { routePaths } from "../../constants/path";

function MainPage() {
  return (
    <Style.LayoutContainer>
      <Link to={routePaths.home}>
        <Style.SrOnly>Fullio</Style.SrOnly>
        <Style.LogoImage src={logoBook} />
      </Link>
      <div>네비</div>
      <Style.ContentsGrid>
        <div>달력</div>
        <div>서치바</div>
        <div>activity</div>
        <div>my skill</div>
        <div>info</div>
        <div>month record</div>
      </Style.ContentsGrid>
    </Style.LayoutContainer>
  );
}

export default MainPage;
