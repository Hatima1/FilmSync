// import imge from "../../../public/";
// public/The-Midnight-Sky-230.jpg

import styled from "styled-components";

function header() {
  return (
    <div className=' bg-[url("../../../public/Gravity-023.jpg")] bg-cover h-[300px]  md:h-[400px] '>
      <header className="max-w-6xl mx-auto     ">
        <h1 className=" uppercase w-[700px] text-center    text-4xl    text-[#d9d9d9] font-semibold pt-[90px] pb-1   ">
          {" "}
          Discover Cinematic Wonders{" "}
        </h1>
        <p1 className="text-xl  font-semibold text-gray-200">
          {" "}
          Where Stories Come Alive
        </p1>
      </header>
    </div>
  );
}

export default header;
