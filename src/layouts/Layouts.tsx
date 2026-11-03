import { Outlet } from "react-router-dom";
import "./Layouts.scss";

function Layouts() {
  return (
    <>
      <div className="content ">
        <Outlet />
      </div>
    </>
  );
}

export default Layouts;
