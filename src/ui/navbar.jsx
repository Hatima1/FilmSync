import {
  FaCompass,
  FaHome,
  FaRegUser,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { UseUserInfo } from "../features/login/useUserInfo";

// import { HiArrowLeftOnRectangle } from "react-icons/hi2";

function Navbar() {
  const { user } = UseUserInfo();
  const navigate = useNavigate();
  return (
    <div className=" rounded-md    ">
      <div className=" text-sm  font-medium text-gray-800  bg-slate-50 flex justify-between items-center p-2">
        <div>dont konw </div>

        <div className=" flex   ">
          <div className=" gap-1    hover:text-gray-950  mr-20 text-lg flex items-center ">
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
              <Link to="/home">Home</Link>
            </div>
          </div>
          <div className=" gap-1    hover:text-gray-950  mr-20 text-lg flex items-center ">
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
              <Link to="/timeline">expolor</Link>
            </div>
          </div>

          <div className="  text-lg flex items-center">
            <FaSearch /> srech
          </div>
        </div>
        <div>
          <div className=" flex gap-x-7 items-center ">
            {/* <div className=" text-lg flex items-center">
              {" "}
              <IoMdNotifications />
              notification
            </div> */}
            <div className=" ">
              <Link
                className="items-center text-lg flex"
                to={`/profile/${user.id}`}
              >
                <img
                  className="  w-8   h-8 mr-1     rounded-full "
                  src="../../public/Gravity-023.jpg  "
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
                  {user.name}
                </p>
              </Link>
            </div>
            <div className=" text-xl text-black ">
              <FaSignOutAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
