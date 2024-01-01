import Header from "./Header";
import MyComments from "./MyComments";
import useProfile from "./useProfile";
import Sidebar from "../Profile/sidebar";

function MainProfile() {
  const { user, isLoading } = useProfile();
  if (isLoading) return <p>loding</p>;
  const x = [];

  console.log(user.posts.length);

  console.log(user);

  return (
    <div className="  ">
      <div className=" grid  grid-cols-[2fr_auto] bg-gray-50 p-1">
        <div className="  ">
          <Header user={user} />
          <MyComments />
        </div>
        <div className="  border-l    pt-28 ">
          <input type="text" className="  bg-gray-100 "></input>

          <p className=" text-gray-950 font-bold text-lg ml-2 "> suggestion </p>
          <div className="flex border-t  flex-col gap-3  bg-gray-100  p-2  rounded-tr-xl rounded-br-xl ">
            <Sidebar />
            <Sidebar />
            <Sidebar />
            <Sidebar />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
