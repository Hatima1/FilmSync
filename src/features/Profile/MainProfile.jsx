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
  console.log(user);

  return (
    <div className="   pl-3  ">
      {/* <Navbar /> */}
      <div className="  grid-cols-1    grid  sm:grid-cols-[2fr_auto]   ">
        <div className="  ">
          <Header user={user} />
          <div className="  border-t mb-8  ">
            <div className=" text-center">
              <h2 className=" text-lg font-semibold  mt-2        ">
                Recent Review
              </h2>
              <div className=" text-center  border-t-1 border   border-teal-900   mx-auto w-14 ">
                {" "}
              </div>
            </div>
          </div>
          {ProfilePosts.length === 0 && (
            <p className="  font-semibold text-center">
              {" "}
              your post will show here{" :) "}
            </p>
          )}
          {ProfilePosts.map((posts) => (
            <Main user={user} posts={posts} key={posts.id} />
          ))}
        </div>
        <div className="  border-l     pt-10 ">
          <p className=" text-gray-950 font-bold text-lg ml-2  pt-3 ">
            {" "}
            suggestion{" "}
          </p>
          <div className="flex border-t   flex-col gap-2  bg-gray-100  p-2  rounded-tr-lg rounded-br-lg ">
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
