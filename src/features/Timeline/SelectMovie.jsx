import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";

import { useMovies } from "../movie/useMovie";
import Result from "./ResultSelectMovie";

function MovieSearch({ setmovie, SelectMovie }) {
  const [openModal, setOpenModal] = useState(false);
  const [mov, setmovieSerch] = useState("");
  const { movies, isLoading, error } = useMovies(mov);

  //   const test = movie({ namee });
  console.log(movies);

  return (
    <>
      <button
        className=" text-xs text-black font-semibold bg-gray-200 rounded-lg p-1  "
        onClick={() => setOpenModal(true)}
      >
        {SelectMovie ? SelectMovie.Title : "Select Movie First"}{" "}
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> Select Movie</Modal.Header>
        <Modal.Body>
          <div className="">
            <TextInput
              placeholder="search movie"
              onChange={(e) => setmovieSerch(e.target.value)}
            />
            {isLoading && (
              <div className=" w-full text-center ">
                {" "}
                <Spinner />
              </div>
            )}
            {error && <p className=" font-semibold text-center">{error}</p>}

            {!isLoading &&
              !error &&
              movies.length !== 0 &&
              movies?.map((movie) => (
                <Result
                  setOpenModal={setOpenModal}
                  setmovie={setmovie}
                  movie={movie}
                  key={movie.id}
                />
              ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieSearch;
