import { useState } from "react";

import Fav from "../../ui/Fav";
import FollowBotton from "./FollowBotton";

function Header({ user, setmovoe }) {
  const [showMore, setshowMore] = useState(false);
  const [active, setactive] = useState("fav");
  // const FavMovie = showMore ? movie : movie.slice(0, 7);
  const FavMovie = showMore ? user?.fav : user.fav.slice(0, 4);
  const WhatchList = showMore ? user?.watchlist : user.watchlist.slice(0, 4);

  function handlershow() {
    setshowMore((a) => !a);
  }

  return (
    <>
      <div className="  pt-5 flex mb-9       ">
        <div className="  shrink-0      ">
          <img
            className=" rounded-full    h-16 w-16  md:w-24     md:h-24     "
            src={user.avatar ? user.avatar : "/download.jpeg"}
            alt="  profile pic "
            width="5"
            height="5"
            loading="lazy"
          />
        </div>
        <div className="md:pl-5 pl-3">
          <div className=" flex gap-3 mb-1 items-center">
            <p className=" text-lg md:text-2xl font-semibold text-gray-950  ">
              {user.name}
            </p>
            <div className=" flex gap-2">
              <FollowBotton profileUser={user} />
            </div>
          </div>

          <div className="  text-sm  md:text-sm font-semibold text-gray-800  mb-3  pr-10  ">
            {user.bio ? user.bio : <p className=" text-gray-800 ">NO Bio </p>}
          </div>
          <div className=" flex gap-3">
            <div className=" uppercase      font-semibold  text-black  md:text-base   text-sm        ">
              {user.following?.length}{" "}
              <span className=" text-gray-700  md:text-base text-xs ">
                {" "}
                following
              </span>
            </div>
            <div className=" uppercase      font-semibold  text-black  md:text-base    text-sm   ">
              {user.follower?.length}
              <span className=" text-gray-700  text-xs md:text-base ">
                {" "}
                followers
              </span>
            </div>
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
            className={`  text-sm  sm:text-base  hover:text-black text-gray-900 ${
              active === "fav" &&
              " border-b-[2px] border-teal-950 font-semibold  "
            }  `}
          >
            {user.fav?.length} FAVORITE FILMS
          </button>
          <button
            onClick={() => {
              setactive("whatch");
              setshowMore(false);
            }}
            className={`  text-sm sm:text-base    hover:text-black text-gray-900  ${
              active === "whatch" &&
              " border-b-[2px] border-teal-950 font-semibold  "
            }  `}
          >
            {user.watchlist?.length} WHATCH LIST
          </button>
        </div>
      </div>

      {/* favmovie */}
      <div className="mb-9 ">
        <div className="sm:grid-cols-6 grid grid-cols-4      gap-x-1  gap-y-9 px-1  ">
          {active === "fav" &&
            FavMovie?.map((postar) => (
              <Fav setmovoe={setmovoe} post={postar} key={postar.id} />
            ))}
          {active === "whatch" &&
            WhatchList?.map((postar) => (
              <Fav setmovoe={setmovoe} post={postar} key={postar.id} />
            ))}
        </div>
        <div className=" text-end  font-bold   text-black  text-sm mr-2 mt-4 ">
          <button
            className={`  ${
              user.fav.length > 4 || user.watchlist.length > 4
                ? "  inline"
                : "hidden"
            }  text-xs  hover:underline underline-offset-4 `}
            onClick={handlershow}
          >
            {" "}
            {showMore ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
