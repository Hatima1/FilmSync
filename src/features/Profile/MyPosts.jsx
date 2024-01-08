import { CiHeart } from "react-icons/ci";
import { FaComment, FaRegComment } from "react-icons/fa";
import PublicComment from "./PostComments";
import { IoIosCopy } from "react-icons/io";

function MyPost() {
  return (
    <>
      <div className="      p-2   border-b  border-r       ">
        <div className=" justify-between flex">
          <div className=" flex">
            <img
              className="  rounded-lg  w-[70px]  "
              src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
            />
            <div className="  ml-4 ">
              <h2 className="  font-semibold text-xl  text-gray-950   ">
                RED MAN{" "}
              </h2>{" "}
              <p className=" text-gray-800 text-sm font-semibold">Movie</p>
              <p className="  text-gray-800 text-xs font-semibold">2001</p>
            </div>
          </div>

          <div className=" flex    gap-1 mb-2  ">
            <img
              className="  w-8   h-8     rounded-full "
              src="../../public/Gravity-023.jpg  "
            />
            <div className=" flex">
              <div className=" text-gray-900 text-base font-semibold inline-block ml-2 pt-1   ">
                Sarah Dayan
              </div>
            </div>
          </div>
        </div>

        <div className=" text-gray-800  py-2 text-left space-y-4">
          <blockquote>
            <p className="  text-xl font-medium text-gray-700"> lol man</p>
          </blockquote>
          <div className=" flex justify-between ">
            <div className=" flex items-center gap-1    ">
              <div>
                <FaRegComment style={{ fontSize: "20px" }} />
              </div>
              <div>
                <span className=" h-4 text-xs   text-gray-400">12</span>{" "}
              </div>
            </div>

            <div className=" flex items-center ">
              <CiHeart style={{ fontSize: "25px" }} />{" "}
              <span className=" text-xs   text-gray-400">100</span>
            </div>
          </div>
        </div>
      </div>
      <PublicComment />
    </>
  );
}

export default MyPost;
