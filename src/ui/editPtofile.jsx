"use client";

import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Modal,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";
import { useUpdateUser } from "../features/Profile/useUpdateUser";
import useProfile from "../features/Profile/useProfile";

function Component({ user }) {
  const { updateUser, isUpdating } = useUpdateUser();

  const [openModal, setOpenModal] = useState(false);
  const [name, setname] = useState("");
  const [bio, setbio] = useState("");
  const [avatar, setAvatar] = useState(null);

  function onCloseModal() {
    setOpenModal(false);
    setname("");
  }
  function confim() {
    console.log(avatar);
    updateUser({ avatar, user, name, bio });
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="file-upload" value="Upload file" />
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
                onChange={(event) => setbio(event.target.value)}
                id="bio"
                type="bio"
                required
              />
            </div>

            <div className="w-full">
              <Button onClick={confim}>Update profile</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Component;
