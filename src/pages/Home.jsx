import Hedeing from "../ui/Hedeing";
import Header from "../features/home/header";
import Logout from "../ui/Logout";
// import { getdata } from "../servers/apiAuth";

// import { UseUser } from "../features/Auth/useUser";
// import { useState } from "react";

function Home() {
  // const [name, setname] = useState();
  // const { user } = UseUser();
  // console.log(user);
  // const data = getdata({ id: user.id }).then((data) => setname(data.name));

  return (
    <div className="max-w-6xl mx-auto  ">
      <Header />
      {/* <Hedeing> hi </Hedeing>
      <Logout /> */}
    </div>
  );
}

export default Home;
