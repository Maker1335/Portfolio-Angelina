import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import "./PagesLayout.scss";

function PagesLayout() {
  return (
    <div className="pages-layout">
      <Header />
      <main className="pages-layout__content">
        <Outlet />
      </main>
    </div>
  );
}
export default PagesLayout;
