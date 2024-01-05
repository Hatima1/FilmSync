import {
  FaCompass,
  FaHome,
  FaRegUser,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

// import { HiArrowLeftOnRectangle } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="     ">
      <div className=" bg-slate-50 flex justify-between items-center p-2">
        <div>INSTGRAM</div>

        <div className=" flex   ">
          <div className=" mr-20  text-lg flex items-center">
            <FaHome /> Home
          </div>
          <div className=" mr-20 text-lg flex items-center ">
            <FaCompass /> expolor
          </div>
          <div className="  text-lg flex items-center">
            <FaSearch /> srech
          </div>
        </div>
        <div>
          <div className=" flex gap-x-7 items-center ">
            <div className=" text-lg flex items-center">
              {" "}
              <IoMdNotifications />
              notification
            </div>
            <div className=" items-center text-lg flex">
              <img
                className="  w-8   h-8 mr-1     rounded-full "
                src="../../public/Gravity-023.jpg  "
              />
              <FaRegUser />{" "}
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
