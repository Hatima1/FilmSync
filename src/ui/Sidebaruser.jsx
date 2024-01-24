function Sidebaruser({ user }) {
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
        <div className="">
          <p className="   text-base  font-semibold  text-gray-900 ">
            {user.createBy}
          </p>
          <p className="   text-xs  font-semibold text-gray-700"> </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebaruser;
