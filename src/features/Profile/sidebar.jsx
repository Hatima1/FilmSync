function sidebar() {
  return (
    <div className="   p-1   border-b border-gray-200 w-80      flex justify-between">
      <div className=" flex gap-2 ">
        <img
          className="  w-10 h-10     rounded-full "
          src="../../public/Gravity-023.jpg  "
          alt="profile photo"
        />
        <div className="">
          <p className="   text-base  font-semibold  text-gray-900 ">
            hatim ahmed{" "}
          </p>
          <p className="   text-xs  font-semibold text-gray-700">
            {" "}
            Lorem ipsum Lorem
          </p>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
