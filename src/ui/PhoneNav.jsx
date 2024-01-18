import { FaCompass, FaHome, FaRegUser, FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import MovieSearch from "../features/movie/movieSearch";
import { UseUserInfo } from "../features/login/useUserInfo";

function PhoneNav() {
  const { user } = UseUserInfo();
  const location = useLocation();
  return (
    <div className=" fixed w-full text-gray-600      z-50  opacity-100 bg-gray-50 flex justify-between items-center  p-2 shadow-md">
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
          <Link to="/timeline">expolor</Link>
        </div>
      </div>

      <div className="  text-sm  flex items-center">
        <MovieSearch />
      </div>

      <div className=" ">
        <Link className="items-center text-sm flex" to={`/profile/${user.id}`}>
          <img
            className="  w-6   h-6 mr-1     rounded-full "
            src="Gravity-023.jpg  "
            alt="profile"
          />
          <FaRegUser />

          <p
            className={` text-sm  ${
              location.pathname === `/profile/${user.id}`
                ? "border-teal-900 font-semibold text-gray-950"
                : ""
            }  `}
          >
            {user.name}
          </p>
        </Link>
      </div>

      {/* <div className=" items-center text-sm  flex">
        <FaRegUser />
        <img
          className="  w-6   h-6     rounded-full "
          src="../../public/Gravity-023.jpg  "
          alt="profile pic"
          height="5"
          width="5"
        />
      </div> */}
    </div>
  );
}

export default PhoneNav;
