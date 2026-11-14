import { Outlet } from "react-router-dom";
import "./MainLayout.scss";

function MainLayout() {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
}

export default MainLayout;
