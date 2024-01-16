function UserResult({ user }) {
  return (
    <div className="  bg p-1 border-b border-gray-100     flex justify-between">
      <div className=" flex gap-2 mr-12">
        <img
          className="  w-12 h-12     rounded-full "
          src={user.avatar}
          alt="profile photo"
        />
        <div>
          <p className="   text-base  font-semibold  text-gray-900 ">
            {user.name}{" "}
          </p>
          <p className=" w-40  text-xs  font-semibold text-gray-600">
            {" "}
            {user.bio}
          </p>
        </div>
      </div>
      <div>
        <p className=" text-sm w-[5.5rem]   text-center py-1   px-2     font-medium text-white    border border-teal-950  bg-teal-950   rounded-full  ">
          follow
        </p>
      </div>
    </div>
  );
}

export default UserResult;
