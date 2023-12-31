import Header from "../../Profile/Header";
import MyComments from "../../Profile/MyComments";
import useProfile from "../../Profile/useProfile";
import Main from "../Timeline/Main";

function MainProfile() {
  const { user } = useProfile();
  console.log(user);

  return (
    <div className="  ">
      <div className=" grid  grid-cols-[1000px_300px]">
        <div className="  ">
          <Header />
          <MyComments />
        </div>
        <div className=" bg-gray-200 ">test</div>
      </div>
    </div>
  );
}

export default MainProfile;
