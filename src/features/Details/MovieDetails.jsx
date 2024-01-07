import { CiClock2 } from "react-icons/ci";
import { IoIosText } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import DataPicker from "./DataPicker";
import TecketSelect from "./TecketSelect";
import TecketForm from "./TecketForm";
import useMovieDetails from "./useMovieDetails";

function MovieDetails() {
  const { movie, isLoading } = useMovieDetails();
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

  if (isLoading) return <p>looding</p>;
  return (
    <section className=" mt-10 mb-28  bg-gray-50      rounded-lg shadow-xl   ">
      <div className="  grid px-2 xl:px-0     xl:grid-cols-[auto_minmax(550px,_1fr)_minmax(0,_1fr)]         rounded-lg  grid-cols-1   ">
        <div className=" mb-10   xl:mb-0  text-center     ">
          <img
            className="  rounded-xl    inline-block  w-2/3  xl:w-full      "
            src={movie.Poster}
          />
        </div>
        <div className=" xl:px-8 mb-16 xl:mb-0 pt-2    px-2 ">
          <div className=" ">
            {/* <p className=" text-green-400 font-semibold ">2010</p> */}
            <h2 className=" text-6xl font-semibold inline-block  text-gray-800    ">
              {movie.Title}
            </h2>{" "}
            <span>1900</span>
            <p className=" text-gray-500 text-sm mb-3   ">
              Action.Comedy.Crime
            </p>
            <div>
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
            <p className="text-gray-600 ">
              <span className=" font-bold  text-base  text-gray-800">
                Actors:
              </span>
              {movie.Actors}
            </p>
            {/* rate */}
          </div>
        </div>

        {/*            Ticket         */}

        <div className=" pt-2     ">
          <h2 className=" mb-5 text-2xl font-semibold inline-block  text-gray-800">
            Buy Ticket
          </h2>

          <TecketForm />
          <div className=" w-3/4  mb-8 ">
            <DataPicker />
          </div>
          <div className=" mb-7 ">
            <TecketSelect />
          </div>
          <div className=" flex justify-end w-full    ">
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
