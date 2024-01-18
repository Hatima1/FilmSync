import Header from "../features/home/header";
import Logout from "../ui/Logout";
import Main from "../features/home/Main";
import About from "../features/home/About";

import { UseUserInfo } from "../features/login/useUserInfo";

import { useEffect } from "react";
//

function Home() {
  const { isLoading, user } = UseUserInfo();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) return <p>loding</p>;

  return (
    <div className=" px-3    ">
      <p> hi {user?.name} </p>
      {/* <Navbar /> */}
      <Header />
      <About />

      <Main />

      {/* <Hedeing> hi </Hedeing> */}
      {/* <Logout /> */}
    </div>
  );
}

export default Home;
