import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import PhoneNav from "./PhoneNav";
import { UseUserInfo } from "../features/login/useUserInfo";
import Spinner from "./Spinner";

function AppLayout() {
  const { user, isLoading } = UseUserInfo();
  if (isLoading) return <Spinner />;
  return (
    <div className=" overflow-hidden ">
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <PhoneNav />
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AppLayout;
