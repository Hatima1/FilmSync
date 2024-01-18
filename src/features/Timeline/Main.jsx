import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { UseUpdatePosts } from "./useUpdatePost";
import { useNavigate } from "react-router-dom";

import UseUserPr from "../Timeline/useUserProfilrPic";

function Main({ posts, user }) {
  const { updatePost, isUpdating } = UseUpdatePosts();

  const { isLoading, userProfile } = UseUserPr(posts.createById);
  const navigate = useNavigate();
  if (isLoading) return <></>;
  console.log(userProfile);
  const { avatar: profilePic, name } = userProfile;

  const isLike = JSON.stringify(posts.likes).includes(`${user.id}`);
  const userFirstName = name.split(" ").slice(0, 1).join("");

  function handlerEdit() {
    const newLike = isLike
      ? posts.likes.filter((a) => a.id !== user.id)
      : [...posts.likes, { id: user.id }];
    console.log(isLike, newLike);
    updatePost({ posts, newLike });
  }

  return (
    <>
      <div className="      p-2   border-b        ">
        <div className=" justify-between  flex ">
          <div className=" flex gap-x-2">
            <img
              className="    w-24  md:w-[100px] rounded-lg  "
              src={posts.movie?.Poster}
              alt="movie img"
              width="90"
              height="auto"
              loading="lazy"
            />
            <div className="   ">
              <div
                onClick={() => navigate(`/details/${posts.movie.imdbID}`)}
                className="  hover:underline cursor-pointer  md:w-auto  w-40      font-semibold md:text-lg text-base   text-gray-950  "
              >
                {posts.movie?.Title}
              </div>{" "}
              <p className=" text-gray-700 text-md font-semibold">
                {posts.movie?.Type}
              </p>
              <p className="  text-gray-700 text-xs font-semibold">
                {posts.movie?.Year}
              </p>
            </div>
          </div>

          <div className=" flex  md:w-auto      gap-1  mb-2  ">
            <div className=" w-8 md:w-auto   ">
              <img
                onClick={() => navigate(`/profile/${posts.createById}`)}
                className=" md:h-10 md:w-10    w-[33px] h-[33px]     rounded-full "
                src={profilePic ? profilePic : "../../public/download.jpeg"}
                alt=" profile img "
                height="36"
                width="36"
              />
            </div>

            <div className="     text-gray-900 text-sm md:text-base font-semibold     ">
              <div
                onClick={() => navigate(`/profile/${posts.createById}`)}
                className=" cursor-pointer  hover:underline "
              >
                {userFirstName}
              </div>
            </div>
          </div>
        </div>

        <div className="   text-gray-800  py-2 text-left space-y-4">
          <p
            onClick={() => navigate(`/comment/${posts.id}`)}
            className=" cursor-pointer   text-base  font-medium text-gray-900"
          >
            {" "}
            {posts.caption}{" "}
          </p>

          <div className=" flex justify-between   ">
            <div
              onClick={() => navigate(`/comment/${posts.id}`)}
              className="  cursor-pointer flex items-center gap-1   pl-7    "
            >
              <div className="  hover:bg-slate-100 ">
                <FaRegComment style={{ fontSize: "20px" }} />
              </div>
              <div>
                <span className=" h-4 text-xs   text-gray-700">
                  {" "}
                  {posts.comments?.length}
                </span>{" "}
              </div>
            </div>

            <button
              onClick={handlerEdit}
              className=" hover:font-black gap-1   flex items-center pr-7 "
            >
              {isLike ? (
                <FaHeart style={{ fontSize: "20px", color: "black" }} />
              ) : (
                <FaRegHeart style={{ fontSize: "20px" }} />
              )}{" "}
              <span className=" text-xs    text-gray-700">
                {posts.likes?.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
