import { FaCalendarDay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Result({ movie }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="  rounded-lg  hover:bg-gray-50  mt-2 ">
        <div className=" flex gap-x-2   border-b p-1   ">
          <div>
            <img
              className=" rounded-lg    w-[5rem]   "
              src={movie.Poster}
              alt=" post  photo"
            />
          </div>
          <div>
            <p
              onClick={() => navigate(`/Test/${movie.imdbID}`)}
              className=" cursor-pointer hover:underline font-semibold text-base text-gray-900"
            >
              {movie.Title}{" "}
            </p>
            <div className="flex items-center">
              <span>
                <FaCalendarDay style={{ color: "teal" }} />
              </span>
              <p className=" text-sm">{movie.Year} </p>
            </div>
            <p className=" text-sm font-semibold">{movie.Type} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
