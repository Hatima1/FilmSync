import { useState } from "react";
import Component from "../../ui/editPtofile";
import Fav from "./Fav";
import FollowBotton from "./FollowBotton";

function Header({ user }) {
  const [showMore, setshowMore] = useState(false);
  const [active, setactive] = useState("fav");
  const FavMovie = showMore ? user.fav : user.fav.slice(0, 5);
  const WhatchList = showMore ? user.watchlist : user.watchlist.slice(0, 5);
  console.log(WhatchList);

  function handlershow() {
    setshowMore((a) => !a);
  }
  return (
    <>
      {/* <Component user={user} /> */}
      <div className="  pt-5 flex mb-9       ">
        <div className="  shrink-0      ">
          <img
            className=" rounded-full    h-16 w-16  sm:w-24     sm:h-24     "
            src={`${user.avatar}`}
            alt="  profile pic "
          />
        </div>
        <div className=" pl-5">
          <div className=" flex gap-3 mb-2 items-center">
            <p className=" text-2xl font-semibold text-gray-950  ">
              {user.name}
            </p>
            <div className=" flex gap-2">
              <FollowBotton profileUser={user} />
            </div>
          </div>

          <p className=" text-sm font-semibold text-gray-900  mb-3 ">
            Lorem ipsum dolor sit am lor
          </p>
          <div className=" flex gap-3">
            <p className=" uppercase      font-semibold  text-black  text-base        ">
              {user.following.length}{" "}
              <span className=" text-gray-700  text-sm "> following</span>
            </p>
            <p className=" uppercase      font-semibold  text-black  text-base   ">
              {user.follower.length}
              <span className=" text-gray-700  text-sm ">followers</span>
            </p>
          </div>
        </div>
      </div>

      <div className=" mb-5 ml-5 border-t ">
        <div className=" flex gap-6 mt-5  ">
          <button
            onClick={() => {
              setactive("fav");
              setshowMore(false);
            }}
            className={`    hover:text-black text-gray-900 ${
              active === "fav" && " border-b-[2px] border-teal-950  "
            } font-semibold  `}
          >
            {user.fav.length} FAVORITE FILMS
          </button>
          <button
            onClick={() => {
              setactive("whatch");
              setshowMore(false);
            }}
            className={`     hover:text-black text-gray-900  ${
              active === "whatch" && " border-b-[2px] border-teal-950 "
            } font-semibold  `}
          >
            {user.watchlist.length} WHATCH LIST
          </button>
        </div>
      </div>

      {/* favmovie */}
      <div className="mb-9 ">
        <div className="sm:grid-cols-5 grid grid-cols-4     auto-cols-auto  gap-x-4  gap-y-9 px-3  ">
          {active === "fav" &&
            FavMovie.map((postar) => (
              <Fav post={postar.post} key={postar.id} />
            ))}
          {active === "whatch" &&
            WhatchList.map((postar) => (
              <Fav post={postar.post} key={postar.id} />
            ))}
        </div>
        <div className=" text-end  font-bold   text-black  text-sm mr-2 mt-4 ">
          <button
            className="  hover:underline underline-offset-4 "
            onClick={handlershow}
          >
            {" "}
            {showMore ? "SHOW LESS" : "SHOW MORE"}{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
