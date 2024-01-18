import DetilsImg from "../Details/DetilsImg";
import { useUpdateUser } from "../Profile/useUpdateUser";

import { CiClock2 } from "react-icons/ci";
import { IoIosText } from "react-icons/io";
import {
  FaBookmark,
  FaHeart,
  FaRegBookmark,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";

function MovieDet({ user, movie }) {
  const { updateUser, isUpdating } = useUpdateUser();

  const iswhachlist = JSON.stringify(user.watchlist).includes(
    `${movie.imdbID}`
  );
  const isFav = JSON.stringify(user.fav).includes(`${movie.imdbID}`);

  function handlerWatchlist() {
    const newWhatch = iswhachlist
      ? user.watchlist.filter((a) => a.id !== movie.imdbID)
      : [...user.watchlist, { id: movie.imdbID, post: movie.Poster }];
    console.log(newWhatch);

    updateUser({ user, newWhatch });
  }
  function handerFav() {
    const newFav = isFav
      ? user.fav.filter((a) => a.id !== movie.imdbID)
      : [...user.fav, { id: movie.imdbID, post: movie.Poster }];
    updateUser({ user, newFav });
  }
  return (
    <>
      <DetilsImg movie={movie} />
      <div className=" xl:px-8 xl:mb-16 mb-6 pt-2 border-r    px-2 ">
        <div className=" flex items-center gap-x-1 ">
          <div className=" xl:text-2xl text-2xl  font-bold  mb-1  text-gray-950    ">
            {movie.Title}
          </div>{" "}
          {/* <span className=" font-semibold text-gray-700">{movie.Year} </span> */}
        </div>
        <p className=" text-gray-500 text-sm mb-3   ">
          <span className=" font-semibold text-gray-800">{movie.Year}</span> /
          {movie.Genre} /{movie.Type}
          {movie.totalSeasons && "/"}
          <span className=" text-xs">{movie.totalSeasons}</span>
          {movie.totalSeasons && "seasons"}
        </p>
        {/* icons */}
        <div className=" flex items-center gap-x-10 mb-5  ">
          <div className=" flex items-center ">
            <div className=" inline-block      ">
              <CiClock2 color=" #14213d " size={20} />
            </div>
            <p className=" text-gray-600 text-sm  inline-block       ">
              {movie.Runtime}
            </p>
          </div>
          <div className=" flex items-center">
            <div className=" inline-block     ">
              <IoIosText color="#14213d " size={20} />
            </div>
            <p className=" text-gray-600 text-sm  inline-block      ">
              English
            </p>
          </div>
          <div className=" flex items-center">
            <div className=" inline-block     ">
              <FaStar color=" #14213d " size={20} />
            </div>
            <p className=" text-gray-600 text-sm  inline-block      ">
              {movie.imdbRating}
            </p>
          </div>
        </div>
        {/* icons */}
        {/* about */}
        <p className=" text-gray-800  mb-3  font-semibold  text-sm   ">
          {" "}
          <span className=" font-bold  text-base   text-gray-900">
            About:
          </span>{" "}
          {movie.Plot}
        </p>
        {/* Director */}
        <p className=" text-gray-800  mb-3  font-semibold  text-sm  ">
          <span className=" font-bold  text-base  text-gray-900">
            Director:
          </span>{" "}
          {movie.Director}
        </p>
        <p className="text-gray-800  mb-3  font-semibold  text-sm ">
          <span className=" font-bold  text-base  text-gray-900">Actors:</span>
          {movie.Actors}
        </p>
        <div className=" flex gap-x-2">
          <button
            disabled={isUpdating}
            onClick={handlerWatchlist}
            className="  flex items-center text-sm  gap-x-1  w-auto     text-center   p-2 font-medium text-white    border  bg-teal-950  "
          >
            {" "}
            {iswhachlist ? (
              <FaBookmark style={{ fontSize: "15px", color: "white" }} />
            ) : (
              <FaRegBookmark style={{ fontSize: "15px", color: "white" }} />
            )}
            <p className=" font-semibold ">
              {iswhachlist ? " Remove" : "Ad To Watchlist"}
            </p>
          </button>
          <button
            onClick={handerFav}
            className="  flex items-center gap-x-1  text-sm   w-auto  text-center   p-2 font-medium text-white    border  bg-teal-950  "
          >
            {" "}
            {isFav ? (
              <FaHeart style={{ fontSize: "15px", color: "white" }} />
            ) : (
              <FaRegHeart style={{ fontSize: "15px", color: "white" }} />
            )}
            <p className=" font-semibold ">{isFav ? "Remove" : "Favourite"} </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieDet;
