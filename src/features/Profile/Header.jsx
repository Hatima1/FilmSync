import Component from "../../ui/editPtofile";
import Fav from "./Fav";
import FollowBotton from "./FollowBotton";

function Header({ user }) {
  return (
    <>
      <Component user={user} />
      <div className="  pt-5 flex mb-9       ">
        <div>
          <img
            className=" w-24 h-24     rounded-full "
            src="../../public/Gravity-023.jpg  "
          />
        </div>
        <div className=" pl-6">
          <div className=" flex gap-3 mb-2 items-center">
            <p className=" text-2xl font-semibold text-gray-950  ">
              {user.name}
            </p>
            <div className=" flex gap-2">
              <FollowBotton profileUser={user} />
            </div>
          </div>

          <p className=" text-sm font-semibold text-gray-800  w-[500px] mb-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            deserunt numquam quia cum nulla repellendus? Earum quae nam ea nulla
            odio? Quo fugit ipsam tempore, facilis ut eius quia quidem. lo
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

      <div className=" mb-5 ml-5">
        <div className=" flex gap-6 ">
          <h2 className=" border-teal-950 border-b-[2px] font-semibold  ">
            {user.fav.length} FAVORITE FILMS
          </h2>
          <h2 className=" border-teal-950  font-semibold  ">
            {user.watchlist.length} WHATCH LIST
          </h2>
        </div>
      </div>
      <Fav />
    </>
  );
}

export default Header;
