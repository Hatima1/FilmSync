function tecketForm() {
  return (
    <div className=" mb-5">
      <form action="">
        <div className=" mb-3">
          <label className="  text-lg font-semibold text-gray-900 block">
            Name
          </label>
          <input
            className="  bg-gray-100 p-1 rounded-full  border-gray-100 text-black  "
            type=" text"
          />
        </div>
        <div className=" mb-5">
          <label className=" block text-lg font-semibold text-gray-900">
            Phone Number
          </label>
          <input
            type=" text"
            className="  bg-gray-100 p-1 rounded-full  border-gray-100 text-black  "
          />
        </div>
        <div className=" mb-3     ">
          <label className=" text-lg font-semibold text-gray-900">Time: </label>

          <select className=" ">
            <option> 10:00pm</option>
            <option> 20:00pm</option>
            <option> 23:00pm</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default tecketForm;
