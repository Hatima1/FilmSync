import { Spinner } from "flowbite-react";
import UseUserPr from "../features/Timeline/useUserProfilrPic";

function UsersComments({ post }) {
  const { isLoading, userProfile } = UseUserPr(post.createById);
  if (isLoading) return <Spinner />;

  const { avatar: profilePic } = userProfile;

  return (
    <>
      <div className=" flex gap-x-3 border-b py-4  ">
        <img
          className="   w-11   h-11     rounded-full "
          src={
            !isLoading && profilePic ? profilePic : "../../public/download.jpeg"
          }
          alt="profil pic  "
        />
        <div>
          <div className="  font-semibold text-gray-950 text-base  inline-block   pb-1     ">
            <span>{post.createBy}</span>
            <span className=" text-gray-400 text-xs pt-2">.2m</span>
          </div>
          <p className="  text-base font-medium  text-gray-800">
            {" "}
            {post.caption}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default UsersComments;
