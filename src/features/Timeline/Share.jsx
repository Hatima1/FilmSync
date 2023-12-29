function Share() {
  return (
    <div className=" max-w-7xl mx-auto ">
      <div className=" mt-11 mb-11 flex gap-2 ">
        <img
          className=" mr-2  w-9   h-9     rounded-full "
          src="../../public/Gravity-023.jpg  "
        />
        <div className="     ">
          <div className="  ">
            <textarea
              rows={5}
              cols={50}
              className=" text-xl text-black bg-slate-100 p-2  rounded-xl "
              placeholder="What new"
            ></textarea>
          </div>
        </div>
        <div className=" flex   flex-col  justify-end    ">
          <div className="  ">
            <button className=" px-8 py-2 text-white bg-teal-800 rounded-full text-lg font-semibold  ">
              click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
