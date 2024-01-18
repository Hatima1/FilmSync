import { Modal, ModalHeader, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";

import { useMovies } from "./useMovie";
import Result from "./result";
import UseUsersName from "./useUserByname";
import UserResult from "./userResult";
import { FaSearch } from "react-icons/fa";

function MovieSearch() {
  const [openModal, setOpenModal] = useState();
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

  console.log(userNamea);
  console.log(error);
  return (
    <>
      <button
        className=" hover:text-gray-950  flex items-center  text-sm  sm:text-lg"
        onClick={() => setOpenModal(true)}
      >
        <FaSearch /> search
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>
          <p className="  mt-1 text-base font-semibold   self-center  ">
            search for movie or user
          </p>
        </ModalHeader>{" "}
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
                  <UserResult
                    setOpenModal={setOpenModal}
                    key={user.id}
                    user={user}
                  />
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
