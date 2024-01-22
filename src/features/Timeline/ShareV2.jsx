import { useState } from "react";

import { useCreatPost } from "../Timeline/useNewPosts";

import SelectMovie from "./SelectMovie";
import MovieData from "./MovieData";
import Spinner from "../../ui/Spinner";

function ShareV2({ user }) {
  const { CreatePost, isUpdating } = useCreatPost();
  const [text, settext] = useState();
  const [moviename, setmoviename] = useState();
  const [movieyear, setmovieyear] = useState();
  const [movietype, setmovietype] = useState("movie");
  const [img, setimg] = useState();

  if (isUpdating) return <Spinner />;
  console.log({ moviename, movieyear, movietype, img });

  function handlerText() {
    console.log(user);
    const newPost = {
      createBy: user.name,
      caption: text,
      moviename: moviename,
      movieyear: movieyear,
      movietype: movietype,
      img: img,
      likes: [],
      createById: user.id,
      comments: [],
      createat: Date.now(),
    };

    CreatePost(newPost, {
      onSettled: () => {
        settext(" ");
        setmoviename("");
        setmovieyear("");
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
            {/* <SelectMovie SelectMovie={movie} setmovie={setmovie} /> */}
            <MovieData
              moviename={moviename}
              movieyear={movieyear}
              movietype={movietype}
              img={img}
              setmoviename={setmoviename}
              setmovietype={setmovietype}
              setmovieyear={setmovieyear}
              setimg={setimg}
            />
          </div>
          <button
            disabled={!moviename && true}
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

export default ShareV2;
