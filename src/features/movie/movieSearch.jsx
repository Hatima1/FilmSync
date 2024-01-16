import { Button, Modal, ModalHeader, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";

import { useMovies } from "./useMovie";
import Result from "./result";
import UseUsersName from "./useUserByname";
import UserResult from "./userResult";

function MovieSearch() {
  const [openModal, setOpenModal] = useState(false);
  const [userSerch, setuserSerch] = useState();
  const { isLoading, userNamea } = UseUsersName(userSerch);
  const [mov, setmove] = useState("");
  // const [usersREsult, setusersREsult] = useState("");

  const { movies, isLoading: lodingmovie, error } = useMovies(mov);
  const [select, setselect] = useState("serchMovie");
  // if (isLoading) return <p>loding</p>;

  // const name = "eyad";
  // const what = userNamea(name);
  // console.log(what);
  function handlerSerch() {
    // setuserSerch("");
    // setuserSerch("eyad");
  }
  console.log(userNamea);
  console.log(error);
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
              {lodingmovie && (
                <div className=" w-full text-center ">
                  {" "}
                  <Spinner />
                </div>
              )}
              {error && <p className=" font-semibold text-center">{error}</p>}
              {/* {movies.length === 0 && <p>movie not found</p>} */}
              {!lodingmovie &&
                !error &&
                movies.length !== 0 &&
                movies?.map((movie) => (
                  <Result movie={movie} key={movie.imdbID} />
                ))}
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

                {isLoading && (
                  <div className=" w-full text-center ">
                    {" "}
                    <Spinner />
                  </div>
                )}
                {!isLoading && userNamea !== null && userNamea.length === 0 && (
                  <div className=" w-full text-center font-semibold ">
                    {" "}
                    no user found
                  </div>
                )}
              </div>

              {!isLoading &&
                userNamea?.map((user) => (
                  <UserResult key={user.id} user={user} />
                ))}
              {/* <UserResult key={userNamea.id} user={userNamea} /> */}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieSearch;
