// import { CiHeart } from "react-icons/ci";
// import { FaComment, FaRegComment } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

import Sidebar from "../features/Profile/sidebar";
import MyPost from "../features/Comment/MyPosts";

function Comment() {
  return (
    <div className=" grid-cols-1    grid  sm:grid-cols-[2fr_auto] bg-gray-50 px-2 py-2 ">
      <div className="  ">
        <div className=" items-center flex pl-2 gap-x-5 pb-5 ">
          <IoMdArrowRoundBack style={{ fontSize: "20px" }} />

          <div>
            <p className=" text-xl font-semibold"> post </p>
          </div>
        </div>
        <MyPost />
      </div>

      <div className="  border-l    pt-28 ">
        <p className=" text-gray-950 font-bold text-lg ml-2 "> suggestion </p>
        <div className="flex border-t  flex-col gap-3  bg-gray-100  p-2  rounded-tr-xl rounded-br-xl ">
          <Sidebar />
          <Sidebar />
          <Sidebar />
          <Sidebar />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Comment;
