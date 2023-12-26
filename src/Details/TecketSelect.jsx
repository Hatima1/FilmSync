import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

function TecketSelect() {
  const [count, setcount] = useState(0);

  function addhandler() {
    if (count > 7) return;
    setcount((count) => count + 1);
  }
  function delletehandler() {
    if (count === 0) return;
    setcount((count) => count - 1);
  }
  return (
    <div className=" flex items-center transition-all duration-300 gap-[3px]   ">
      <button className="" onClick={delletehandler}>
        <span className="   text-xs inline-block bg-gray-900 text-white rounded-full px-2  py-1 hover:bg-gray-800  ">
          -
        </span>
      </button>
      <span className=" p-2 bg text-base font-bold "> {count} TECKET </span>
      <button className="  " onClick={addhandler}>
        <span className="  text-xs inline-block bg-gray-900  text-white rounded-full px-2  py-1 hover:bg-gray-800 ">
          +
        </span>
      </button>
    </div>
  );
}

export default TecketSelect;
