import { CiClock2 } from "react-icons/ci";
import { IoIosText } from "react-icons/io";
import { FaStar } from "react-icons/fa";
function Test() {
  return (
    <div className=" max-w-7xl mx-auto p-4   ">
      <section className=" mt-10 bg-cover  z-50   rounded-lg shadow-xl   ">
        <div className=" grid  grid-flow-col   rounded-lg    ">
          <div className="      ">
            <img
              className="  rounded-xl     "
              src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
            />
          </div>
          <div className=" px-8  ">
            <div className="  w-1/2">
              {/* <p className=" text-green-400 font-semibold ">2010</p> */}
              <h2 className=" text-6xl font-semibold inline-block  text-gray-800    ">
                RED
              </h2>{" "}
              <span>1900</span>
              <p className=" text-gray-500 text-sm mb-1  ">
                Action.Comedy.Crime
              </p>
              <div>
                {/* icons */}

                <div className=" flex items-center gap-x-9 mb-7  ">
                  <div className=" flex items-center">
                    <div className=" inline-block     ">
                      <CiClock2 color=" #14213d " size={20} />
                    </div>
                    <p className=" text-gray-500 text-sm  inline-block      ">
                      2h 2min{" "}
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <div className=" inline-block     ">
                      <IoIosText color="#14213d " size={20} />
                    </div>
                    <p className=" text-gray-500 text-sm  inline-block      ">
                      English
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <div className=" inline-block     ">
                      <FaStar color=" #14213d " size={20} />
                    </div>
                    <p className=" text-gray-500 text-sm  inline-block      ">
                      8.1/10
                    </p>
                  </div>
                </div>
              </div>
              {/* icons */}
              <p className=" text-gray-500   ">
                {" "}
                <span className=" font-semibold text-lg  text-gray-800">
                  About:
                </span>
                When his peaceful life is threatened by a high-tech assassin,
                former black-ops agent Frank Moses reassembles his old team in a
                last-ditch effort to survive and uncover his assailants
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;
