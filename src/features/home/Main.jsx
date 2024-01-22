import { useState } from "react";
import Fav from "../../ui/Fav";
import { movie } from "../../ui/ListOfMovie";

function Main({ setmovoe }) {
  const [showMore, setshowMore] = useState(7);

  const FavMovie = movie.slice(0, showMore);
  function handlershow() {
    setshowMore((a) => a + 7);
  }
  return (
    <>
      <div className=" max-w-6xl mx-auto px-2 border-t mb-10  ">
        <div className="mb-5 font-semibold text-lg md:text-2xl md:mt-12  mt-4  text-gray-900   ">
          {" "}
          populer movie
          <div className=" border-t-2  w-20 mt-1 border-teal-900 "></div>
        </div>
        <div className="md:grid-cols-7 grid grid-cols-4     gap-x-2  gap-y-9  ">
          {FavMovie.map((postar) => (
            <Fav setmovoe={setmovoe} post={postar} key={postar.id} />
          ))}
        </div>
        <div className=" text-end  font-bold   text-black  text-sm mr-2 mt-4 ">
          <button
            className="  hover:underline underline-offset-4 "
            onClick={handlershow}
          >
            {" "}
            {"SHOW MORE"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
