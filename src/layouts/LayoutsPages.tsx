import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import "./LayoutsPages.scss";

function LayoutsPages() {
  return (
    <>
      <div className="content">
        <Header />
        <div className="content__main">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default LayoutsPages;
