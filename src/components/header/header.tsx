import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";

function Header({}) {
  const location = useLocation();

  const titles = {
    "/Illustrations": "иллюстрации",
    "/GraphicDesign": "графический дизайн",
    "/Contacts": "контакты",
    "/": "",
  };

  const section = titles[location.pathname] || "";
  return (
    <header className="header">
      <div className="test">
        <h1>
          <NavLink to="/">ПОРТФОЛИО</NavLink>
        </h1>
        {section && <h2 className="section">{section}</h2>}
      </div>
    </header>
  );
}

export default Header;
