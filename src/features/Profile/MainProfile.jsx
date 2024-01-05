import Header from "./Header";
import MyPost from "./MyPosts";
import useProfile from "./useProfile";
import Sidebar from "./sidebar";
import Navbar from "../../ui/navbar";

import usePosts from "../Timeline/usePosts";

function MainProfile() {
  const { user, isLoading } = useProfile();
  const { Posts, isLoading: lodingpost } = usePosts();
  if (isLoading || lodingpost) return <p>loding</p>;

  console.log(user.posts.length);
  console.log(Posts);

  return (
    <div className="  ">
      <Navbar />
      <div className="  grid-cols-1    grid  sm:grid-cols-[2fr_auto] bg-gray-50 p-2">
        <div className="  ">
          <Header user={user} />
          <div>
            <h2 className=" text-center text-lg font-semibold  border-t  ">
              RECENT REVIEW
            </h2>
          </div>
          <MyPost />
        </div>
        <div className="  border-l    pt-28 ">
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
