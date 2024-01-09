function UsersComments({ comment }) {
  return (
    <div className=" flex gap-x-3 border-b py-4 ">
      <img
        className="  w-10   h-10     rounded-full "
        src="../../public/Gravity-023.jpg  "
      />
      <div>
        <div className=" text-gray-900 text-base font-semibold inline-block     ">
          Sarah Dayan
        </div>
        <p className="text-sm font-medium text-gray-800">{comment}</p>
      </div>
    </div>
  );
}

export default UsersComments;
