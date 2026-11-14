import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";

const titles = {
  "/Illustrations": "иллюстрации",
  "/GraphicDesign": "графический дизайн",
  "/Contacts": "контакты",
  "/": "",
};

function Header() {
  const location = useLocation();

  const section = titles[location.pathname] || "";

  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">
          <NavLink to="/" className="header__logo-link">
            ПОРТФОЛИО
          </NavLink>
        </h1>
        {section && <h2 className="header__section-title">{section}</h2>}
      </div>
    </header>
  );
}

export default Header;
