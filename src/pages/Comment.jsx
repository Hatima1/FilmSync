// import { CiHeart } from "react-icons/ci";
// import { FaComment, FaRegComment } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

import Sidebar from "../features/Profile/sidebar";
import MyPost from "../features/Comment/MyPosts";
import { useMoveBack } from "../hooks/useMoveBack";

function Comment() {
  return (
    <div className="bg-gray-50 min-h-screen  pt-14 md:pt-14 ">
      <div className=" grid-cols-1  max-w-7xl mx-auto    grid  md:grid-cols-[2fr_auto] px-2 py-2 ">
        <div className="  border-l min-h-screen    ">
          <div className="   items-center flex pl-1 gap-x-1 pb-5 ">
            <IoMdArrowRoundBack
              onClick={useMoveBack()}
              className=" hover:bg-gray-200 p-1 rounded-full "
              style={{ fontSize: "25px" }}
            />

            <div>
              <p
                onClick={useMoveBack()}
                className=" cursor-pointer  inline-block hover:underline  text-base sm:text-xl font-semibold"
              >
                {" "}
                back{" "}
              </p>
            </div>
          </div>
          <MyPost />
        </div>

        <div className="  border-l border-r  hidden md:block   pt-28 ">
          <p className=" text-gray-950 font-bold text-lg ml-2 "> suggestion </p>
          <div className="flex border-t  flex-col gap-3  bg-gray-100  p-2  rounded-tr-xl rounded-br-xl ">
            {/* <Sidebar />
            <Sidebar />
            <Sidebar />
            <Sidebar />
            <Sidebar /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
