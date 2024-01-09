import { useState } from "react";

import { UseUserInfo } from "../login/useUserInfo";
import { useCreatPost } from "../Timeline/useNewPosts";
import { UseUser } from "../Auth/useUser";
import SelectMovie from "./SelectMovie";

function Share({ user }) {
  const [text, settext] = useState();
  const [movie, setmovie] = useState();
  console.log(movie);
  // const { user: us } = UseUser();

  const { CreatePost } = useCreatPost();

  function handlerText() {
    const newPost = {
      createBy: user.name,
      caption: text,
      movie: movie,
      likes: [],
    };
    console.log(newPost);
    CreatePost(newPost);
  }
  return (
    <div className=" flex  py-4  border-b     gap-1 mb-2  ">
      <img
        className="  w-8   h-8     rounded-full "
        src="../../public/Gravity-023.jpg  "
        alt="public/Gravity-023.jpg  "
      />
      <div className="  sm:flex  hidden  ">
        <textarea
          onChange={(e) => settext(e.target.value)}
          rows={3}
          className="  w-[25rem]  focus:border-white focus:outline-none border  border-gray-300 rounded-xl bg-gray-50"
        />
        <div className=" self-end flex items-center ml-1">
          <button
            onClick={handlerText}
            className="text-sm     w-24 text-center   p-2  font-semibold  text-white  border    bg-teal-950   rounded-full "
          >
            post
          </button>
          <div>
            <SelectMovie SelectMovie={movie} setmovie={setmovie} />
          </div>
        </div>
      </div>
    </div>
    // <div className=" mt-11 mb-11 flex gap-2 ">
    //   <img
    //     className=" mr-2  w-9   h-9     rounded-full "
    //     src="../../public/Gravity-023.jpg  "
    //   />
    //   <div className="     ">
    //     <div className="  ">
    //       <textarea
    //         onChange={(e) => settext(e.target.value)}
    //         rows={5}
    //         cols={50}
    //         className=" text-xl text-black bg-slate-100 p-2  rounded-xl "
    //         placeholder="What new"
    //       ></textarea>
    //     </div>
    //   </div>
    //   <div className=" flex   flex-col  justify-end    ">
    //     <div className="  ">
    //       <button
    //         onClick={handlerText}
    //         className=" px-8 py-2 text-white bg-teal-800 rounded-full text-lg font-semibold  "
    //       >
    //         click
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Share;
