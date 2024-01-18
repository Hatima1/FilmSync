import { useState } from "react";

import { useCreatPost } from "../Timeline/useNewPosts";

import SelectMovie from "./SelectMovie";
import Spinner from "../../ui/Spinner";

function Share({ user }) {
  const { CreatePost, isUpdating } = useCreatPost();
  const [text, settext] = useState();
  const [movie, setmovie] = useState();
  console.log(movie);

  if (isUpdating) return <Spinner />;

  function handlerText() {
    console.log(user);
    const newPost = {
      createBy: user.name,
      caption: text,
      movie: movie,
      likes: [],
      createById: user.id,
      movieid: movie.imdbID,
      comments: [],
    };
    setmovie("");

    CreatePost(newPost, {
      onSettled: () => {
        settext(" ");
      },
    });
  }

  return (
    <div className=" flex  py-4  border-b     gap-1 mb-2  ">
      <img
        className="  w-8   h-8     rounded-full "
        src="../../public/Gravity-023.jpg  "
        alt="public/Gravity-023.jpg  "
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
          <div>
            <SelectMovie SelectMovie={movie} setmovie={setmovie} />
          </div>
          <button
            disabled={!movie && true}
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

export default Share;
