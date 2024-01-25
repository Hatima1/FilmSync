import { useNavigate } from "react-router-dom";

function UserResult({ user, setOpenModal }) {
  const navigate = useNavigate();
  return (
    <div className="  bg p-1 border-b border-gray-100">
      <div className=" flex gap-2 ">
        <img
          className="  w-12 h-12     rounded-full "
          src={user.avatar ? user.avatar : "../download.jpeg"}
          alt="profile photo"
          height="12"
          width="12"
        />
        <div>
          <p
            onClick={() => {
              setOpenModal(false);
              navigate(`/profile/${user.id}`);
              // window.location.reload();
            }}
            className="  hover:underline cursor-pointer   text-base  font-semibold  text-gray-900 "
          >
            {user.name}
          </p>
          <p className=" text-xs  font-semibold text-gray-600"> {user.bio}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default UserResult;
