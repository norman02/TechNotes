import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

function DashLayout() {
  return (
    <>
    <DashHeader/>
      <div className="dash-container"></div>
      <Outlet />
    </>
  );
}

export default DashLayout;
