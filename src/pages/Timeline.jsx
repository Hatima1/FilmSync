import Main from "../features/Timeline/Main";
import Share from "../features/Timeline/Share";
import usePosts from "../features/Timeline/usePosts";
import Sidebar from "../features/Profile/sidebar";

import SelectTimline from "../features/Timeline/SelectTimline";
// import { UseMove } from "../features/movie/useMovie";
import MovieSearch from "../features/movie/movieSearch";
import { UseUserInfo } from "../features/login/useUserInfo";
import { useState } from "react";
import Navbar from "../ui/navbar";
import PhoneNav from "../ui/PhoneNav";
import Logout from "../ui/Logout";
function Timeline() {
  const { user, isLoading: islo } = UseUserInfo();
  const { Posts, isLoading } = usePosts();
  const [timeline, settimeline] = useState("all");
  // const { movie, isLoading: s } = UseMove();

  // const f = Posts.map((a) => );

  if (isLoading || islo) return <p>loding</p>;
  const Myfrind = JSON.stringify(user.following);

  const followingTi = Posts.filter((a) => Myfrind.includes(a.createById));

  const TimeLine = timeline === "all" ? Posts : followingTi;
  console.log(TimeLine);

  const sortedItemsDesc = Posts.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <div className="bg-gray-50 min-h-screen  ">
      <div className="max-w-7xl mx-auto    ">
        <div className="  fixed w-full    ">{/* <PhoneNav />{" "} */}</div>
        {/* <Navbar /> */}

        <div className="  grid-cols-1 border-l    grid  md:grid-cols-[2fr_auto]  px-1   ">
          <div>
            <MovieSearch />
            <SelectTimline timeline={timeline} settimeline={settimeline} />
            <Share user={user} />

            {TimeLine.map((postss) => (
              <Main user={user} posts={postss} key={postss.id} />
            ))}
          </div>

          <div className="  border-l border-r min-h-screen     pt-24 ">
            <p className=" text-gray-950 font-bold text-lg ml-2 ">
              {" "}
              suggestion{" "}
            </p>
            <div className="flex border-t  border-b flex-col gap-3  bg-gray-100  p-2  rounded-tr-xl rounded-br-xl ">
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
