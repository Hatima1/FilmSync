function comment() {
  return (
    <>
      <h2 className=" text-2xl font-semibold  mb-16 text-center text-gray-900 ">
        {" "}
        Popular Reviews{" "}
      </h2>
      <div className="  p-3   border-t   ">
        <div className=" flex  gap-1 mb-2  ">
          <img
            className=" w-12   h-12     rounded-full "
            src="../../public/Gravity-023.jpg  "
          />
          <div className=" text-gray-900 inline-block ml-2 pt-1   ">
            Sarah Dayan .
          </div>
          <div className=" text-gray-400 text-sm pt-2   ">2m </div>
        </div>
        <div className=" text-gray-800 p-2 text-left space-y-4">
          <blockquote>
            <p className="text-base font-medium">
              Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.
            </p>
          </blockquote>
          <figcaption className="font-medium"></figcaption>
        </div>
      </div>
      <div className="  p-5    border-t  border-b   ">
        <div className=" flex  gap-1 mb-4  ">
          <img
            className=" w-12   h-12     rounded-full "
            src="../../public/Gravity-023.jpg  "
          />
          <div className=" text-gray-900 inline-block ml-2   ">
            Sarah Dayan .
          </div>
          <div className="text-gray-500 text-sm  pt-[3px]   ">2m </div>
        </div>
        <div className=" md:p-2 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-base font-medium  ">
              Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.
            </p>
          </blockquote>
          <figcaption className="font-medium"></figcaption>
        </div>
      </div>
    </>
  );
}

export default comment;
