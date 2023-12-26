import { CiClock2 } from "react-icons/ci";
import { IoIosText } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import DataPicker from "./DataPicker";
import TecketSelect from "./TecketSelect";
import TecketForm from "./TecketForm";

function MovieDetails() {
  return (
    <section className=" mt-10 mb-28     rounded-lg shadow-xl   ">
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
            <p className=" text-gray-500 text-sm mb-3  ">Action.Comedy.Crime</p>
            <div>
              {/* icons */}

              <div className=" flex items-center gap-x-10 mb-5  ">
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
            <p className=" text-gray-600 mb-5   ">
              {" "}
              <span className=" font-semibold text-base  text-gray-800">
                About:
              </span>
              When his peaceful life is threatened by a high-tech assassin,
              former black-ops agent Frank Moses reassembles his old team in a
              last-ditch effort to survive and uncover his assailants.
            </p>
            {/* Director */}
            <p className="text-gray-600 mb-5 ">
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

        {/*            Ticket         */}

        <div className="    ">
          <h2 className=" mb-9 text-2xl font-semibold inline-block  text-gray-800">
            Buy Ticket
          </h2>

          <TecketForm />
          <div className=" w-3/4  mb-7 ">
            <DataPicker />
          </div>
          <div className=" mb-7">
            <TecketSelect />
          </div>
          <div className=" flex justify-end w-full    ">
            <button className="  text-gray-100  bg-teal-950 p-2  w-full  text-lg font-semibold hover:bg-teal-900  ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
