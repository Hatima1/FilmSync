"use client";

import {
  Button,
  FileInput,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";
import { useUpdateUser } from "../features/Profile/useUpdateUser";
import toast from "react-hot-toast";

function Component({ user }) {
  console.log(user);
  const { updateUser, isUpdating } = useUpdateUser();

  const [openModal, setOpenModal] = useState(false);
  const [name, setname] = useState(user.name);
  const [bio, setbio] = useState(user.bio);
  const [avatar, setAvatar] = useState(null);
  if (isUpdating) return <p>isLoding</p>;

  function onCloseModal() {
    setOpenModal(false);
  }
  function confim() {
    const UpdateDetails = {
      avatar,
      name,
      bio,
    };

    toast.success(` done  `);
    setOpenModal(false);
    updateUser({ user, UpdateDetails });
  }

  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <button
        onClick={() => setOpenModal(true)}
        className=" text-xs  sm:text-sm    text-center   p-1  font-semibold  text-white       bg-teal-950 rounded-md       "
      >
        edit profile
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header>
          <p className=" mt-2    ml-4 text-base font-medium text-gray-900 dark:text-white">
            edit your profile
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-3">
            <div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="file-upload" value="imge " />
                </div>
                <FileInput
                  onChange={(e) => setAvatar(e.target.files[0])}
                  id="file-upload"
                />
              </div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="name" />
              </div>
              <TextInput
                id="text"
                placeholder=" new name"
                value={name}
                onChange={(event) => setname(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="bio" />
              </div>
              <Textarea
                value={bio}
                onChange={(event) => setbio(event.target.value)}
                id="bio"
                type="bio"
                required
              />
            </div>

            <div className="w-full">
              <Button
                className=" hover:bg-teal-900   bg-teal-950 "
                onClick={confim}
              >
                Update profile
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Component;
