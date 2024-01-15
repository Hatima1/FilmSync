import { Button, Modal, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";

import { useMovies } from "./useMovie";
import Result from "./result";
import UseUsersName from "./useUserByname";

function MovieSearch() {
  const [openModal, setOpenModal] = useState(false);
  const [userSerch, setuserSerch] = useState();
  const { isLoading, userNamea } = UseUsersName(userSerch);
  const [mov, setmove] = useState("");
  // const [usersREsult, setusersREsult] = useState("");

  const { movies, isLoading: l, error } = useMovies(mov);
  const [select, setselect] = useState("serchMovie");
  // if (isLoading) return <p>loding</p>;
  console.log(userNamea);
  // const name = "eyad";
  // const what = userNamea(name);
  // console.log(what);
  function handlerSerch() {
    // setuserSerch("");
    // setuserSerch("eyad");
  }
  console.log(movies);
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>a</ModalHeader>{" "}
        <div className=" place-items-center grid grid-cols-2 border-b pt-4">
          <div
            className={
              select === "serchMovie" &&
              " text-lg font-semibold text-gray-950   "
            }
          >
            <button onClick={() => setselect("serchMovie")}>Movie</button>
            {select === "serchMovie" && (
              <div className=" border-t-2 border-teal-950"></div>
            )}
          </div>
          <div
            className={
              select === "serchUser" &&
              " text-lg font-semibold text-gray-950   "
            }
          >
            <button onClick={() => setselect("serchUser")}>Users</button>
            {select === "serchUser" && (
              <div className=" border-t-2 border-teal-950"></div>
            )}
          </div>
        </div>
        <Modal.Body>
          {select === "serchMovie" && (
            <div className="">
              <TextInput
                placeholder="search  movie"
                onChange={(e) => setmove(e.target.value)}
              />
              {isLoading && <p>loding</p>}
              {movies.length === 0 && <p>movie not found</p>}
              {!isLoading &&
                movies.length !== 0 &&
                movies?.map((movie) => <Result movie={movie} key={movie.id} />)}
            </div>
          )}
          {select === "serchUser" && (
            <div className="   ">
              <TextInput
                placeholder="search  users"
                onChange={(e) => setuserSerch(e.target.value)}
              />
              <div className=" flex justify-end  mt-1">
                {/* <button
                  onClick={handlerSerch}
                  className=" bg-teal-900  rounded  w-20 p-1 text-white text-base    "
                >
                  {" "}
                  search{" "}
                </button> */}
                {!userNamea}
                {isLoading && "Loding"}
              </div>
              {/* {isLoading && <p>loding</p>}
              {!isLoading &&
                movies.length !== 0 &&
                movies?.map((movie) => <Result movie={movie} key={movie.id} />)} */}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieSearch;
