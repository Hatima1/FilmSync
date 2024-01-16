import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Fav({ post }) {
  const navigate = useNavigate();

  //  {   !post && return (
  //       <div className=" text-lg font-semibold text-center">
  //         <p>no move add some</p>
  //       </div>
  //     )}

  return (
    <div
      onClick={() => navigate(`/Test/${post.id}`)}
      className=" cursor-pointer   relative    hover:-translate-y-2 transition-all duration-300 shadow-xl   "
    >
      <img className="  rounded-md h-full " src={post.post} />
      <div className="  top-0  absolute "></div>
    </div>
  );
}

export default Fav;
