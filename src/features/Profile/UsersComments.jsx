function UsersComments({ comment }) {
  return (
    <>
      <div className=" flex gap-x-3 border-b py-4  ">
        <img
          className="   w-11   h-11     rounded-full "
          src="../../public/Gravity-023.jpg  "
        />
        <div>
          <div className="  font-semibold text-gray-950 text-base  inline-block   pb-1     ">
            Sarah Dayan. <span className=" text-gray-400 text-sm pt-2">2m</span>
          </div>
          <p className="  text-base font-medium  text-gray-800"> {comment} </p>
        </div>
      </div>
    </>
  );
}

export default UsersComments;
