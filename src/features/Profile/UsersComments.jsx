import { Spinner } from "flowbite-react";
import UseUserPr from "../Timeline/useUserProfilrPic";
import { useNavigate } from "react-router-dom";

function UsersComments({ comment }) {
  console.log(comment);
  const { isLoading, userProfile } = UseUserPr(comment.id);
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;

  const { avatar: profilePic } = userProfile;
  return (
    <>
      <div className=" flex gap-x-3 border-b py-4  ">
        <img
          className="   w-11   h-11     rounded-full "
          src={profilePic ? profilePic : "../../public/download.jpeg"}
          alt="profilePic"
        />
        <div>
          <div className="   font-semibold text-gray-950 text-base  inline-block        ">
            <span
              onClick={() => navigate(`/profile/${comment.id}`)}
              className="cursor-pointer hover:underline"
            >
              {comment.name}
            </span>{" "}
            <span className="  text-gray-400 text-sm pt-2">.2m</span>
          </div>
          <p className="  text-base font-medium  text-gray-800">
            {" "}
            {comment.comment}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default UsersComments;
