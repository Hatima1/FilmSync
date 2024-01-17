import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { UseUpdatePosts } from "./useUpdatePost";
import { useNavigate } from "react-router-dom";

import UseUserPr from "../Timeline/useUserProfilrPic";
import { Spinner } from "flowbite-react";


function Main({ posts, user }) {
  const { updatePost, isUpdating } = UseUpdatePosts();

  const { isLoading, userProfile } = UseUserPr(posts.createById);
  const navigate = useNavigate();
  if (isLoading) return <></>;
  const { avatar: profilePic } = userProfile;

  const isLike = JSON.stringify(posts.likes).includes(`${user.id}`);

  //   {
  //     "id": "b8149ab4-8388-47e8-b885-e0ee4dd86705",
  //     "created_at": "2024-01-08T16:05:59.361732+00:00",
  //     "createBy": "eyad",
  //     "likes": null,
  //     "comments": null,
  //     "caption": null,
  //     "movie": {
  //         "Type": "movie",
  //         "Year": "2008",
  //         "Title": "Iron Man",
  //         "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  //         "imdbID": "tt0371746"
  //     }
  // }
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
        
        <div className=" justify-between flex ">
          <div className=" flex gap-x-2">
            <img
              className="   w-1/5  md:w-[100px] rounded-lg  "
              src={posts.movie?.Poster}
              alt="Poster photo"
              width="90"
              height="auto"
              loading="lazy"
            />
            <div className="   ">
              <div
                onClick={() => navigate(`/Test/${posts.movie.imdbID}`)}
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

          <div className=" flex  md:w-auto   w-28 gap-1  mb-2  ">
            <img
              onClick={() => navigate(`/profile/${posts.createById}`)}
              className="  w-9   h-9     rounded-full "
              src={profilePic ? profilePic : "../../public/download.jpeg"}
              alt=" profile img "
              height="9"
              width="9"
            />
            <div className=" ">
              <div className="  text-gray-900 text-sm md:text-base font-semibold inline-block  pt-1   ">
                <button
                  onClick={() => navigate(`/profile/${posts.createById}`)}
                  className="cursor-pointer hover:underline"
                >
                  {posts.createBy}
                </button>
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
