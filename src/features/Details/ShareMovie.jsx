import { useState } from "react";

import { useCreatPost } from "../Timeline/useNewPosts";
import toast from "react-hot-toast";

function ShareMovie({ user, movie }) {
  const { CreatePost, isUpdating } = useCreatPost();
  const [text, settext] = useState();

  function handlerText() {
    console.log(user);

    const newPost = {
      createBy: user.name,
      caption: text,
      moviename: movie.Title,
      movieyear: movie.Year,
      movietype: movie.Type,
      img: movie.post,
      likes: [],
      createById: user.id,
      comments: [],
      createat: Date.now(),
    };
    settext(" ");

    CreatePost(newPost, {
      onSettled: () => {
        toast.success(` done  `);
      },
    });
  }

  return (
    <div className=" flex  py-4  border-b     gap-1 mb-10  ">
      <img
        className="  w-8   h-8     rounded-full "
        src={user.avatar ? user.avatar : "../../public/download.jpeg"}
        alt="public/Gravity-023.jpg  "
        height="9"
        width="9"
      />
      <div className="  flex   ">
        <div className="  w-auto">
          <textarea
            value={text}
            onChange={(e) => settext(e.target.value)}
            rows={3}
            className=" mr-1  sm:w-[20rem] w-auto   focus:border-white focus:outline-none border  border-gray-300 rounded-xl bg-gray-50"
          />
        </div>
        <div className=" self-end  items-center ml-1 ">
          <button
            disabled={!text && true}
            onClick={handlerText}
            className={`text-sm  disabled:opacity-50     w-24 text-center  mt-2   p-2  font-semibold  text-white  border    bg-teal-950   rounded-full `}
          >
            post
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareMovie;
