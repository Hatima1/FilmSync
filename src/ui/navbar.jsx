import { FaCompass, FaHome, FaRegUser, FaSignOutAlt } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { UseUserInfo } from "../features/login/useUserInfo";
import { Uselogout } from "../features/Auth/useLogout";
import MovieSearch from "../features/movie/movieSearch";

function Navbar({ setmovoe }) {
  const { user, isLoading } = UseUserInfo();
  const { logout } = Uselogout();
  const location = useLocation();
  if (isLoading) return <p>lol</p>;

  const userFirstName = user?.name.split(" ").slice(0, 1)?.join("");

  return (
    <div className=" md:rounded-md rounded  z-50 bg-slate-50  absolute md:p-0    md:fixed w-full shadow-lg  ">
      <div className=" text-sm max-w-7xl mx-auto   font-medium text-gray-700  flex justify-between items-center p-2">
        <Link to="/" className=" flex  items-center ">
          <img
            className="  h-8 w-auto"
            src="../icons8-comedy-100.png"
            alt=" logo"
            height="8"
            width="auto"
            loading="lazy"
          />
          <div className=" font-semibold text-gray-900  text-sm   md:text-lg">
            FilmSync{" "}
          </div>
        </Link>

        <div className="  hidden  md:flex  ">
          <Link
            to="/home"
            className=" gap-1    hover:text-gray-950  mr-20 text-lg flex items-center "
          >
            <div
              className={`   ${
                location.pathname === "/home" ? " text-gray-950" : ""
              }`}
            >
              <FaHome />
            </div>
            <div
              className={`   ${
                location.pathname === "/home"
                  ? "border-b-2  border-teal-900 font-semibold text-gray-950"
                  : ""
              }`}
            >
              Home
            </div>
          </Link>
          <Link
            to="/timeline"
            className=" gap-1    hover:text-gray-950  mr-20 text-lg flex items-center "
          >
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
                  ? "border-b-2  border-teal-900 font-semibold text-gray-950"
                  : ""
              }`}
            >
              Explore
            </div>
          </Link>

          <div className="  text-lg flex items-center">
            <MovieSearch setmovoe={setmovoe} />
          </div>
        </div>
        <div>
          <div className=" flex gap-x-7 items-center ">
            {/* <div className=" text-lg flex items-center">
              {" "}
              <IoMdNotifications />
              notification
            </div> */}
            <div className=" font-semibold text-gray-950 md:block hidden ">
              <Link
                className="items-center text-lg flex"
                to={`/profile/${user.id}`}
              >
                <img
                  className="  w-8   h-8 mr-1     rounded-full "
                  src={user.avatar ? user.avatar : "../download.jpeg"}
                  alt="profile"
                />
                <FaRegUser />

                <p
                  className={` ${
                    location.pathname === `/profile/${user.id}`
                      ? "border-b-2 border-teal-900 font-semibold"
                      : ""
                  }  `}
                >
                  {userFirstName}
                </p>
              </Link>
            </div>
            <button
              onClick={() => logout()}
              className="  flex gap-1  items-center text-sm md:text-xl text-gray-600 hover:text-gray-950 "
            >
              <span className=" text-base font-semibold ">Logout </span>
              {"  "}
              <FaSignOutAlt /> {"  "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
