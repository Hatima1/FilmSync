import Header from "../features/home/header";
import Logout from "../ui/Logout";
import Main from "../features/home/Main";
import About from "../features/home/About";

import { UseUserInfo } from "../features/login/useUserInfo";
import Navbar from "../ui/navbar";
// import { getdata } from "../servers/apiAuth";

// import { UseUser } from "../features/Auth/useUser";
// import { useState } from "react";

function Home() {
  // const [name, setname] = useState();
  // const { user } = UseUser();
  // console.log(user);
  // const data = getdata({ id: user.id }).then((data) => setname(data.name));
  const { isLoading, user } = UseUserInfo();
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
