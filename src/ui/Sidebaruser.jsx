import { useNavigate } from "react-router-dom";

function Sidebaruser({ user }) {
  const navigate = useNavigate();
  return (
    <div className="   p-1   border-b border-gray-200 w-80      flex justify-between">
      <div className=" flex gap-2 ">
        <img
          className="  w-10 h-10     rounded-full "
          // src={user.avatar ? user.avatar : "download.jpeg"}
          src={user.img}
          width={10}
          height={10}
          alt="profile photo"
        />
        <div
          onClick={() => navigate(`/profile/${user.createById}`)}
          className=""
        >
          <p className=" hover:underline cursor-pointer   text-base  font-semibold  text-gray-900 ">
            {user.createBy}
          </p>
          <p className="   text-xs  font-semibold text-gray-700">
            {" "}
            {user.bio}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebaruser;
