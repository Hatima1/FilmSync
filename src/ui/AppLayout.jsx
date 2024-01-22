import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import PhoneNav from "./PhoneNav";
import { UseUserInfo } from "../features/login/useUserInfo";

function AppLayout() {
  const { isLoading, user } = UseUserInfo();
  if (isLoading) return <p>lodidddddddddddddddddddddddddddddddd</p>;
  return (
    <div className="">
      <Suspense fallback={<p>loding dsdcsdcsd</p>}>
        <Navbar />
        <PhoneNav />
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AppLayout;
