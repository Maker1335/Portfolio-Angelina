import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";
import "./HomePage.scss";
import queen from "../../assets/images/MainPage/queen.png";
import pattern from "../../assets/images/MainPage/pattern.png";
import laying_cat from "../../assets/images/Illustrations/tradish/laying cat.png";
import Raging_Bull_2022 from "../../assets/images/Illustrations/digital/Raging Bull 2022.jpg";

function HomePage() {
  return (
    <main className="main">
      <div className="side-bar-link">
        <Header />
        <nav className="links">
          <NavLink to="GraphicDesign">Графисческий дизайн</NavLink>
          <NavLink to="Illustrations">Иллюстрации</NavLink>
          <NavLink to="Contacts">Контакты</NavLink>
        </nav>
      </div>

      <div className="side-bar-image">
        <img src={laying_cat} alt="" className="first" />
        <img src={Raging_Bull_2022} alt="" className="second" />
        <img src={queen} alt="" className="three" />
        <img src={pattern} alt="" className="four" />
      </div>
    </main>
  );
}

export default HomePage;
