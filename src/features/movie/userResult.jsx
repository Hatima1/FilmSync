import { useNavigate } from "react-router-dom";

function UserResult({ user, setOpenModal }) {
  const navigate = useNavigate();
  return (
    <div className="  bg p-1 border-b border-gray-100     flex justify-between">
      <div className=" flex gap-2 mr-12">
        <img
          className="  w-12 h-12     rounded-full "
          src={user.avatar}
          alt="profile photo"
          height="12"
          width="12"
        />
        <div>
          <p
            onClick={() => {
              setOpenModal(false);
              navigate(`/profile/${user.id}`);
            }}
            className="  hover:underline cursor-pointer   text-base  font-semibold  text-gray-900 "
          >
            {user.name}{" "}
          </p>
          <p className=" w-40  text-xs  font-semibold text-gray-600">
            {" "}
            {user.bio}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default UserResult;
