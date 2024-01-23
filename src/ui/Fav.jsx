import { useNavigate } from "react-router-dom";

function Fav({ post, setmovoe }) {
  const navigate = useNavigate();

  //  {   !post && return (
  //       <div className=" text-lg font-semibold text-center">
  //         <p>no move add some</p>
  //       </div>
  //     )}

  function handlerclick() {
    setmovoe(post);
    navigate(`/Details/${post.id}`);
  }

  return (
    <div
      onClick={() => {
        handlerclick();
      }}
      className=" cursor-pointer    relative    hover:-translate-y-2 transition-all duration-300 shadow-xl   "
    >
      <img
        className="  rounded-md  w-full  h-40    sm:w-full sm:h-full        "
        src={post.post}
        alt=" movie poast "
        loading="lazy"
      />
      <div className="  top-0  absolute "></div>
    </div>
  );
}

export default Fav;
