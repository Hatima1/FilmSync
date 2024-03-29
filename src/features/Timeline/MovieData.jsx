"use client";

import { Button, FileInput, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
// import { useUpdateUser } from "../features/Profile/useUpdateUser";

function Component({
  setmoviename,
  setmovietype,
  setmovieyear,
  setimg,
  moviename,
  movieyear,

  movietype,
}) {
  //   const { updateUser, isUpdating } = useUpdateUser();

  const [openModal, setOpenModal] = useState(false);
  //   const [name, setname] = useState(user.name);
  //   const [bio, setbio] = useState(user.bio);
  //   const [avatar, setAvatar] = useState(null);
  //   if (isUpdating) return <p>isLoding</p>;

  function onCloseModal() {
    setOpenModal(false);
  }
  function confim() {
    setOpenModal(false);
  }

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <button
        onClick={() => setOpenModal(true)}
        className=" text-xs text-black font-semibold bg-gray-200 rounded-lg p-1      "
      >
        {moviename ? moviename : "Select Movie First"}
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header>
          <div className="text-base font-semibold mt-1 ml-3  text-gray-900 dark:text-white">
            select movie details
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-2">
            <div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="file-upload">
                    {" "}
                    movie img{" "}
                    <span className=" text-xs">
                      {" "}
                      (if you dont have one,thers default imge){" "}
                    </span>{" "}
                  </Label>
                </div>
                <FileInput
                  onChange={(e) => setimg(e.target.files[0])}
                  id="file-upload"
                />
              </div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="name" />
              </div>
              <TextInput
                value={moviename}
                id="text"
                placeholder=" movie or series name"
                onChange={(event) => setmoviename(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="year" />
              </div>
              <TextInput
                value={movieyear}
                onChange={(event) => setmovieyear(event.target.value)}
                id="yeat"
                type="text"
                placeholder="year"
              />
            </div>
            <div className=" mb-3  w-full    ">
              <label
                value={movietype}
                className="  xl:text-sm font-semibold text-gray-900"
              >
                type:{" "}
              </label>

              <select
                onChange={(e) => setmovietype(e.target.value)}
                className=" bg-gray-50 border-gray-300 active:border-gray-300 text-sm rounded-lg  "
              >
                <option> movie </option>
                <option> series </option>
              </select>
            </div>

            <div onClick={confim} className="w-full">
              <Button className="   bg-teal-950 ">done</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Component;
