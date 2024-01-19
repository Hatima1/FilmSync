import Main from "../features/Timeline/Main";
import Share from "../features/Timeline/Share";
import usePosts from "../features/Timeline/usePosts";
import Sidebar from "../features/Profile/sidebar";

import SelectTimline from "../features/Timeline/SelectTimline";

import { UseUserInfo } from "../features/login/useUserInfo";
import { useEffect, useState } from "react";

import Spinner from "../ui/Spinner";
function Timeline() {
  const { user, isLoading: islo } = UseUserInfo();
  const { Posts, isLoading } = usePosts();
  const [timeline, settimeline] = useState("all");

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  if (isLoading || islo) return <Spinner />;
  const Myfrind = JSON.stringify(user.following);

  const followingTi = Posts.filter((a) => Myfrind.includes(a.createById));

  const TimeLine = timeline === "all" ? Posts : followingTi;

  return (
    <div className="bg-gray-50 min-h-screen  ">
      <div className="max-w-7xl mx-auto pt-10  md:pt-14    ">
        <div className="  grid-cols-1 border-l    grid  md:grid-cols-[2fr_auto]  px-1   ">
          <div>
            <SelectTimline timeline={timeline} settimeline={settimeline} />
            <Share user={user} />

            {TimeLine.map((postss) => (
              <Main user={user} posts={postss} key={postss.id} />
            ))}
          </div>

          <div className="  border-l border-r  min-h-screen sm:block    hidden   ">
            <h1 className=" mt-24  text-gray-950  font-semibold  text-lg ml-2 ">
              {" "}
              suggestion{" "}
            </h1>
            <div className="flex border-t  border-b flex-col gap-3  bg-gray-100  p-2   ">
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
