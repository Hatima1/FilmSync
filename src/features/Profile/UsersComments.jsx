import UseUserPr from "../Timeline/useUserProfilrPic";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "../../ui/Timeago";

function UsersComments({ comment }) {
  const time = timeAgo(comment.createAt);
  console.log(comment);

  const { isLoading, userProfile } = UseUserPr(comment.id);
  const navigate = useNavigate();
  if (isLoading) return <></>;

  const { avatar: profilePic } = userProfile;
  return (
    <>
      <div className=" flex gap-x-2 px-1 border-b py-3   ">
        <img
          className="   w-9   h-9     rounded-full "
          src={profilePic ? profilePic : "../../public/download.jpeg"}
          alt="profilePic"
          width="11"
          height="11"
        />
        <div>
          <div className="   font-semibold text-gray-950 text-sm        ">
            <span
              onClick={() => navigate(`/profile/${comment.id}`)}
              className="cursor-pointer hover:underline"
            >
              {comment.name}
            </span>{" "}
            <span className="  text-gray-400 text-xs">.{time}</span>
          </div>
          <div className="  ">
            <p className="     text-sm font-medium  text-gray-800">
              {" "}
              {comment.comment}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersComments;
