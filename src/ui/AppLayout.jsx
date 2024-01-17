import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function AppLayout() {
  return (
    <div className="">
      <Suspense fallback={<p>loding dsdcsdcsd</p>}>
        <Navbar />
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AppLayout;
