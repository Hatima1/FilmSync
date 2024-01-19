import { FaCompass, FaHome, FaRegUser } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import MovieSearch from "../features/movie/movieSearch";
import { UseUserInfo } from "../features/login/useUserInfo";

function PhoneNav() {
  const { user } = UseUserInfo();
  const location = useLocation();
  const userFirstName = user.name.split(" ").slice(0, 1)?.join("");
  return (
    <div className=" w-full text-gray-600  flex bottom-0  md:hidden  fixed     z-50  opacity-100 bg-gray-50  justify-between items-center  p-2 mt-4  shadow-2xl ">
      <div className=" gap-1    hover:text-gray-950   text-sm  flex items-center ">
        <div
          className={`  ${
            location.pathname === "/home" ? " text-gray-950" : ""
          }`}
        >
          <FaHome />
        </div>
        <div
          className={`   ${
            location.pathname === "/home"
              ? " border-teal-900 font-semibold text-gray-950"
              : ""
          }`}
        >
          <Link to="/home">Home</Link>
        </div>
      </div>

      <div className=" gap-1    hover:text-gray-950  text-sm  flex items-center ">
        <div
          className={`   ${
            location.pathname === "/timeline" ? " text-gray-950" : ""
          }`}
        >
          <FaCompass />
        </div>
        <div
          className={`   ${
            location.pathname === "/timeline"
              ? " border-teal-900 font-semibold text-gray-950"
              : ""
          }`}
        >
          <Link to="/timeline">Explore</Link>
        </div>
      </div>

      <div className="  text-sm  flex items-center">
        <MovieSearch />
      </div>

      <div
        className={` text-sm  ${
          location.pathname === `/profile/${user.id}`
            ? "border-teal-900 font-semibold text-gray-950"
            : ""
        }  `}
      >
        <Link className="items-center text-sm flex" to={`/profile/${user.id}`}>
          <img
            className="  w-6   h-6 mr-1     rounded-full "
            src={user.avatar ? user.avatar : "../../public/download.jpeg"}
            alt="profile"
            width="6"
            height="6"
          />
          <FaRegUser />

          <p>{userFirstName}</p>
        </Link>
      </div>
    </div>
  );
}

export default PhoneNav;
