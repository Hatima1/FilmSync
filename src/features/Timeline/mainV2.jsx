import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { UseUpdatePosts } from "./useUpdatePost";
import { useNavigate } from "react-router-dom";

import UseUserPr from "../Timeline/useUserProfilrPic";

import { timeAgo } from "../../ui/Timeago";

function MainV2({ posts, user }) {
  const { updatePost } = UseUpdatePosts();

  const { isLoading, userProfile } = UseUserPr(posts.createById);
  const navigate = useNavigate();
  if (isLoading) return <></>;

  const { avatar: profilePic, name } = userProfile;

  const isLike = JSON.stringify(posts.likes).includes(`${user.id}`);
  const userFirstName = name.split(" ").slice(0, 1)?.join("");
  const time = timeAgo(posts.createat);

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
              className="     w-24  md:w-[120px] rounded-lg  "
              src={posts.img ? posts.img : "../@nullmedias.jpeg"}
              alt="movie img"
              loading="lazy"
              sizes="(max-width: 320px) 280px,
             (max-width: 480px) 440px,
             800px"
            />
            <div className="   ">
              <div
                // onClick={() => navigate(`/details/${posts.movie.imdbID}`)}
                className="    md:w-auto        font-semibold md:text-lg text-base   text-gray-950  "
              >
                {posts.moviename}
              </div>{" "}
              <p className=" text-gray-700 text-sm font-semibold">
                {posts.movietype}
              </p>
              <p className="  text-gray-700 text-xs font-semibold">
                {posts.movieyear}
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
              />
            </div>

            <div className="     text-gray-900 text-sm md:text-base font-semibold     ">
              <div
                onClick={() => navigate(`/profile/${posts.createById}`)}
                className=" cursor-pointer  hover:underline "
              >
                {userFirstName}
                <span className=" text-xs  text-gray-500  ">.{time} </span>
              </div>
            </div>
          </div>
        </div>

        <div className="   text-gray-800  py-2 text-left space-y-4">
          <p
            onClick={() => navigate(`/comment/${posts.id}`)}
            className=" cursor-pointer md:text-base   text-sm  font-semibold  text-gray-800"
          >
            {" "}
            {posts.caption}{" "}
          </p>

          <div className=" flex justify-between   ">
            <div
              onClick={() => navigate(`/comment/${posts.id}`)}
              className="  cursor-pointer flex items-center gap-1   pl-7    "
            >
              <div className="   ">
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
              className="  gap-1   flex items-center pr-7 "
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

export default MainV2;
