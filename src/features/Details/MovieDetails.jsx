import { CiClock2 } from "react-icons/ci";
import { IoIosAdd, IoIosText, IoMdRemove } from "react-icons/io";
import {
  FaBookmark,
  FaHeart,
  FaRegBookmark,
  FaRegHeart,
  FaStar,
  FaTicketAlt,
} from "react-icons/fa";

import TecketSelect from "./TecketSelect";
import TecketForm from "./TecketForm";
import useMovieDetails from "./useMovieDetails";
import { UseUserInfo } from "../login/useUserInfo";
import { useUpdateUser } from "../Profile/useUpdateUser";
// const {
//   Title: title,
//   Year: year,
//   Poster: poster,
//   Runtime: runtime,
//   imdbRating,
//   Plot: plot,
//   Released: released,
//   Actors: actors,
//   Director: director,
//   Genre: genre,
// } = movie;

function MovieDetails() {
  const { updateUser } = useUpdateUser();
  const { movie, isLoading } = useMovieDetails();
  const { user, isLoading: lo } = UseUserInfo();
  if (isLoading || lo) return <p>looding</p>;

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
    <section className=" mt-10 mb-28  bg-gray-50      rounded-lg shadow-xl   ">
      <div className="  grid px-2 xl:px-0     xl:grid-cols-[auto_minmax(540px,_1fr)_minmax(0,_1fr)]         rounded-lg  grid-cols-1   ">
        <div className=" mb-10   xl:mb-0  text-center     ">
          <img
            className="  rounded-xl     inline-block  w-2/3  xl:w-full      "
            src={movie.Poster}
          />
        </div>

        <div className=" xl:px-8 mb-16 xl:mb-0 pt-2 border-r    px-2 ">
          <div className=" flex items-center gap-x-1 ">
            <h2 className=" text-4xl font-semibold  mb-1  text-gray-900    ">
              {movie.Title}
            </h2>{" "}
            <span className=" font-semibold text-gray-700">{movie.Year} </span>
          </div>
          <p className=" text-gray-500 text-sm mb-3   ">Action.Comedy.Crime</p>
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
          <p className=" text-gray-600 mb-5  xl:mb-0  ">
            {" "}
            <span className=" font-semibold text-base  text-gray-800">
              About:
            </span>
            {movie.Plot}
          </p>
          {/* Director */}
          <p className="text-gray-600 mb-3 ">
            <span className=" font-bold  text-base  text-gray-800">
              Director:
            </span>
            {movie.Director}
          </p>
          <p className="text-gray-600 mb-3 ">
            <span className=" font-bold  text-base  text-gray-800">
              Actors:
            </span>
            {movie.Actors}
          </p>
          <div className=" flex gap-x-2">
            <button
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
              <p className=" font-semibold ">
                {isFav ? "Remove" : "Favourite"}{" "}
              </p>
            </button>
          </div>
        </div>

        {/*            Ticket         */}

        <div className="  pt-2     ">
          <h2 className=" mb-5 text-2xl font-semibold items-center gap-x-1   text-gray-800 pl-3 flex  ">
            <FaTicketAlt /> Buy Ticket
          </h2>

          <TecketForm />

          <div className=" mb-9 pl-3 ">
            <TecketSelect />
          </div>
          <div className=" flex  justify-center w-full    ">
            <button className="  text-gray-100  bg-teal-950 p-2  w-screen  text-lg font-semibold hover:bg-teal-900  ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
