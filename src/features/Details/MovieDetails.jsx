import { FaTicketAlt } from "react-icons/fa";

import TecketSelect from "./TecketSelect";
import TecketForm from "./TecketForm";
import MovieDet from "./MovieDet";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useMoveBack } from "../../hooks/useMoveBack";
import useMovieDetails from "./useMovieDetails";
import { UseUserInfo } from "../login/useUserInfo";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";

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
  const { movie, isLoading } = useMovieDetails();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const x = useMoveBack();

  const { user } = UseUserInfo();

  if (isLoading)
    return (
      <div className=" w-full text-center ">
        {" "}
        <Spinner />
      </div>
    );

  return (
    <>
      <button
        onClick={x}
        className=" hover:underline font-semibold text-lg  items-center flex pl-1 gap-x-1  mb-3  "
      >
        <IoMdArrowRoundBack
          className="cursor-pointer hover:bg-gray-200  rounded-full "
          style={{ fontSize: "20px" }}
        />
        back
      </button>
      <div className="      border-t mb-16  bg-gray-50      rounded-lg shadow-xl   ">
        <div className="  grid  xl:px-0     xl:grid-cols-[auto_minmax(540px,_1fr)_minmax(0,_1fr)]         rounded-lg  grid-cols-1   ">
          <MovieDet movie={movie} user={user} />

          {/*            Ticket         */}

          <div className="  pt-3     ">
            <h2 className=" mb-5 xl:text-2xl font-semibold items-center gap-x-1 text-lg   text-gray-800 pl-3 flex  ">
              <FaTicketAlt /> Buy Ticket
            </h2>

            <TecketForm />

            <div className=" xl:mb-9 mb-4 pl-3 ">
              <TecketSelect />
            </div>
            <div className=" flex  justify-center w-full    ">
              <button className="  text-gray-100  bg-teal-950 p-2  w-screen  text-lg font-semibold hover:bg-teal-900  ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
