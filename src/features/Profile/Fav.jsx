import { FaHeart } from "react-icons/fa";

function Fav({ post }) {
  return (
    <div className="   relative   hover:-translate-y-2 transition-all duration-300 shadow-xl   ">
      <img className="  rounded-md " src={post} />
      <div className="  top-0  absolute ">
        <div className="  ">
          <FaHeart style={{ color: "white", fontSize: "22px" }} />
        </div>
      </div>
    </div>
  );
}

export default Fav;
