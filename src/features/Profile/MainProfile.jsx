import Header from "./Header";

import useProfile from "./useProfile";
import Sidebar from "./sidebar";

import usePosts from "../Timeline/usePosts";
import Main from "../Timeline/Main";
import { useEffect } from "react";
import Spinner from "../../ui/Spinner";

function MainProfile({ setmovoe }) {
  const { user, isLoading } = useProfile();
  const { Posts, isLoading: lodingpost } = usePosts();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  if (isLoading || lodingpost) return <Spinner />;
  const ProfilePosts = Posts.filter((post) => post.createById === user.id);

  return (
    <div className="   pl-3 mt-10 sm:mt-14 ">
      <div className="  grid-cols-1    grid  md:grid-cols-[2fr_auto]   ">
        <div className="  ">
          <Header setmovoe={setmovoe} user={user} />
          <div className="  border-t mb-8  ">
            <div className=" text-center">
              <h2 className=" md:text-lg text-base font-semibold  mt-2        ">
                Recent Review
              </h2>
              <div className=" text-center  border-t-1 border   border-teal-900   mx-auto w-14 ">
                {" "}
              </div>
            </div>
          </div>
          {ProfilePosts.length === 0 && (
            <p className=" text-sm  font-semibold text-center">
              {" "}
              your post will show here{" :) "}
            </p>
          )}
          {ProfilePosts.map((posts) => (
            <Main user={user} posts={posts} key={posts.id} />
          ))}
        </div>
        <div className="  border-l  hidden md:block     pt-10 ">
          <p className=" text-gray-950  font-semibold  text-lg ml-2  pt-3 ">
            {" "}
            suggestion{" "}
          </p>
          <div className=" hidden border-t  md:flex   flex-col gap-2  bg-gray-100  p-2  ">
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
