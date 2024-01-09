import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

import { useMovies } from "./useMovie";
import Result from "./result";

function MovieSearch() {
  const [openModal, setOpenModal] = useState(false);
  const [mov, setmove] = useState("");
  const { movies, isLoading } = useMovies(mov);

  //   const test = movie({ namee });
 

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="">
            <TextInput
              placeholder="srech"
              onChange={(e) => setmove(e.target.value)}
            />
            {isLoading && <p>loding</p>}
            {!isLoading &&
              movies.length !== 0 &&
              movies?.map((movie) => <Result movie={movie} key={movie.id} />)}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieSearch;
