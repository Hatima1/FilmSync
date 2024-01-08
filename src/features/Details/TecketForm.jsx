import DataPicker from "./DataPicker";

function tecketForm() {
  return (
    <div className=" mb-5 pl-3">
      <form action="">
        <div className=" mb-3">
          <label className="  text-lg font-semibold text-gray-900 block">
            Name
          </label>
          <input
            className="  bg-gray-200  p-1 rounded-lg  w-80   border-gray-100 text-black  "
            type=" text"
          />
        </div>
        <div className=" mb-5">
          <label className=" block text-lg font-semibold text-gray-900">
            Phone Number
          </label>
          <input
            type=" text"
            className="   bg-gray-200 p-1 rounded-lg  w-80   border-gray-100 text-black  "
          />
        </div>
        <div className=" w-3/4  mb-4 ">
          <DataPicker />
        </div>
        <div className=" mb-3     ">
          <label className=" text-lg font-semibold text-gray-900">Time: </label>

          <select className=" bg-gray-50 border-gray-300 active:border-gray-300 text-sm rounded-lg  ">
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
