function Main() {
  return (
    <>
      <div className=" max-w-7xl     mx-auto  ">
        <div className="  grid     ">
          <div className="  rounded-md    p-2   border-b  border-r       ">
            <div className="    ">
              <div className=" justify-between flex">
                <div className=" flex">
                  <img
                    className="   w-[70px]  "
                    src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
                  />
                  <div className="  ml-4 ">
                    <h2 className="  font-semibold sm:text-2xl text-sm   pl-1">
                      RED MAN{" "}
                    </h2>{" "}
                    <p className=" inline-block text-gray-500 text-sm  pl-2">
                      2001
                    </p>
                  </div>
                </div>

                <div className=" flex    gap-1 mb-2  ">
                  <img
                    className="  w-8   h-8     rounded-full "
                    src="../../public/Gravity-023.jpg  "
                  />
                  <div className=" text-gray-900 text-base font-semibold inline-block ml-2 pt-1   ">
                    Sarah Dayan .
                  </div>
                  <div className=" text-gray-400 text-sm pt-2   ">2m </div>
                </div>
              </div>
            </div>

            <div className=" text-gray-800 p-2 text-left space-y-4">
              <blockquote>
                <p className="text-base font-medium text-gray-700">
                  Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                </p>
              </blockquote>
              <figcaption className="font-medium"></figcaption>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
