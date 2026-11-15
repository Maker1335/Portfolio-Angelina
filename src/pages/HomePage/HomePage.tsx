import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";
import "./HomePage.scss";

import queen from "../../assets/images/MainPage/queen.jpg";
import pattern from "../../assets/images/MainPage/pattern.jpg";
import layingCat from "../../assets/images/Illustrations/tradish/laying cat.png";
import RagingBull2022 from "../../assets/images/Illustrations/digital/Raging Bull 2022.jpg";

function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__sidebar">
        <Header />
        <nav className="home-page__nav">
          <NavLink to="GraphicDesign" className="home-page__nav-link">
            Граф. дизайн
          </NavLink>
          <NavLink
            to="Illustrations"
            className="home-page__nav-link home-page__nav-link--reverse"
          >
            Иллюстрации
          </NavLink>
          <NavLink to="Contacts" className="home-page__nav-link">
            Контакты
          </NavLink>
        </nav>
      </div>

      <div className="home-page__gallery">
        <img
          src={layingCat}
          alt="Иллюстрация: кошка лежит"
          className="home-page__image home-page__image--wide"
        />
        <img
          src={RagingBull2022}
          alt="Иллюстрация: бык"
          className="home-page__image home-page__image--tall"
        />
        <img
          src={queen}
          alt="Королева"
          className="home-page__image home-page__image--round"
        />
        <img
          src={pattern}
          alt="Патерн"
          className="home-page__image home-page__image--small"
        />
      </div>
    </main>
  );
}

export default HomePage;
