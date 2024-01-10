import Header from "./Header";

import useProfile from "./useProfile";
import Sidebar from "./sidebar";
import Navbar from "../../ui/navbar";

import usePosts from "../Timeline/usePosts";
import Main from "../Timeline/Main";

function MainProfile() {
  const { user, isLoading } = useProfile();
  const { Posts, isLoading: lodingpost } = usePosts();
  if (isLoading || lodingpost) return <p>loding</p>;
  const ProfilePosts = Posts.filter((post) => post.createById === user.id);

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
          {ProfilePosts.map((posts) => (
            <Main user={user} posts={posts} key={posts.id} />
          ))}
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
