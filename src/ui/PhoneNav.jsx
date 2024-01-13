import { FaCompass, FaHome, FaRegUser, FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

function PhoneNav() {
  return (
    <div className="   bg-gray-50 flex justify-between items-center  p-2 shadow-md">
      <div className="   text-lg flex items-center">
        <FaHome />
      </div>
      <div className="  text-lg flex items-center ">
        <FaCompass />
      </div>
      <div className="  text-lg flex items-center">
        <FaSearch />
      </div>
      <div className=" text-lg flex items-center">
        {" "}
        <IoMdNotifications />
      </div>
      <div className=" items-center text-lg flex">
        <img
          className="  w-8   h-8     rounded-full "
          src="../../public/Gravity-023.jpg  "
        />
      </div>
    </div>
  );
}

export default PhoneNav;
