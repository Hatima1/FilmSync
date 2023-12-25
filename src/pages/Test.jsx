import { CiClock2 } from "react-icons/ci";
import { IoIosText } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import DataPicker from "../ui/DataPicker";
import TecketSelect from "../ui/TecketSelect";
import TecketForm from "../ui/TecketForm";
// import StarRating from "../ui/StarRating";
function Test() {
  return (
    <div className=" max-w-7xl mx-auto p-4   ">
      <section className=" mt-10 bg-cover  z-50   rounded-lg shadow-xl   ">
        <div className=" grid    grid-cols-[auto_minmax(550px,_1fr)_minmax(0,_1fr)]    rounded-lg    ">
          <div className="      ">
            <img
              className="  rounded-xl     "
              src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
            />
          </div>
          <div className=" px-8  ">
            <div className=" ">
              {/* <p className=" text-green-400 font-semibold ">2010</p> */}
              <h2 className=" text-6xl font-semibold inline-block  text-gray-800    ">
                RED
              </h2>{" "}
              <span>1900</span>
              <p className=" text-gray-500 text-sm mb-3  ">
                Action.Comedy.Crime
              </p>
              <div>
                {/* icons */}

                <div className=" flex items-center gap-x-10 mb-3  ">
                  <div className=" flex items-center ">
                    <div className=" inline-block      ">
                      <CiClock2 color=" #14213d " size={20} />
                    </div>
                    <p className=" text-gray-600 text-sm  inline-block       ">
                      2h 2min{" "}
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <div className=" inline-block     ">
                      <IoIosText color="#14213d " size={20} />
                    </div>
                    <p className=" text-gray-600 text-sm  inline-block      ">
                      English
                    </p>
                  </div>
                  <div className=" flex items-center">
                    <div className=" inline-block     ">
                      <FaStar color=" #14213d " size={20} />
                    </div>
                    <p className=" text-gray-600 text-sm  inline-block      ">
                      8.1/10
                    </p>
                  </div>
                </div>
              </div>
              {/* icons */}
              {/* about */}
              <p className=" text-gray-600 mb-3   ">
                {" "}
                <span className=" font-semibold text-base  text-gray-800">
                  About:
                </span>
                When his peaceful life is threatened by a high-tech assassin,
                former black-ops agent Frank Moses reassembles his old team in a
                last-ditch effort to survive and uncover his assailants.
              </p>
              {/* Director */}
              <p className="text-gray-600 mb-3 ">
                <span className=" font-bold  text-base  text-gray-800">
                  Director:
                </span>
                Robert Schwentke
              </p>
              <p className="text-gray-600 ">
                <span className=" font-bold  text-base  text-gray-800">
                  Actors:
                </span>
                Bruce Willis, Helen Mirren, Morgan Freeman
              </p>
              {/* rate */}
            </div>
          </div>

          <div className=" ">
            <h2 className=" mb-9 text-2xl font-semibold inline-block  text-gray-800">
              Buy Ticket
            </h2>

            <TecketForm />
            <div className=" w-3/4  mb-3 ">
              <DataPicker />
            </div>
            <TecketSelect />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;
