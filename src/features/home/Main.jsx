import { useState } from "react";
import Fav from "../../ui/Fav";

function Main() {
  const [showMore, setshowMore] = useState(false);
  const movie = [
    {
      id: "tt1486185",
      post: "https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_SX300.jpg",
    },
    {
      id: "tt1486185",
      post: "https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_SX300.jpg",
    },
    {
      id: "tt1486185",
      post: "https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_SX300.jpg",
    },
    {
      id: "tt1486185",
      post: "https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_SX300.jpg",
    },
    {
      id: "tt1486185",
      post: "https://m.media-amazon.com/images/M/MV5BMTc4NjYyMzQ5MV5BMl5BanBnXkFtZTcwNjE5Mjc3NA@@._V1_SX300.jpg",
    },
    {
      id: "tt1821694",
      post: "https://m.media-amazon.com/images/M/MV5BMjI2ODQ4ODY3Nl5BMl5BanBnXkFtZTcwNTc2NzE1OQ@@._V1_SX300.jpg",
    },
    {
      id: "tt3401882",
      post: "https://m.media-amazon.com/images/M/MV5BMTg0NzkyMjE5NF5BMl5BanBnXkFtZTgwMDE5NTg3MDI@._V1_SX300.jpg",
    },
    {
      id: "tt15307126",
      post: "https://m.media-amazon.com/images/M/MV5BMzIwMzk2NjQtNjRmZS00YWQxLTk3MTgtN2YyYjEwNTc4OTMwXkEyXkFqcGdeQXVyMjE4ODEzODA@._V1_SX300.jpg",
    },
  ];
  const FavMovie = showMore ? movie : movie.slice(0, 7);
  function handlershow() {
    setshowMore((a) => !a);
  }
  return (
    <>
      <div className=" max-w-6xl mx-auto px-2 border-t mb-10  ">
        <div className="mb-5 font-semibold text-lg md:text-2xl mt-16   text-gray-900   ">
          {" "}
          populer movie
          <div className=" border-t-2  w-20 mt-1 border-teal-900 "></div>
        </div>
        <div className="md:grid-cols-7 grid grid-cols-4     gap-x-4  gap-y-9 px-3  ">
          {FavMovie.map((postar) => (
            <Fav post={postar} key={postar.id} />
          ))}
        </div>
        <div className=" text-end  font-bold   text-black  text-sm mr-2 mt-4 ">
          <button
            className="  hover:underline underline-offset-4 "
            onClick={handlershow}
          >
            {" "}
            {showMore ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
