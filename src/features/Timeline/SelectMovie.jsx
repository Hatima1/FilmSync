import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

import { useMovies } from "../movie/useMovie";
import Result from "./ResultSelectMovie";

function MovieSearch({ setmovie, SelectMovie }) {
  const [openModal, setOpenModal] = useState(false);
  const [mov, setmovieSerch] = useState("");
  const { movies, isLoading } = useMovies(mov);

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
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="">
            <TextInput
              placeholder="srech"
              onChange={(e) => setmovieSerch(e.target.value)}
            />
            {isLoading && <p>loding</p>}
            {!isLoading &&
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
