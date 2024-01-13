import { CiHeart } from "react-icons/ci";
import {
  FaCopy,
  FaHeart,
  FaRegComment,
  FaRegCopy,
  FaRegHeart,
} from "react-icons/fa";
import { UseUpdatePosts } from "./useUpdatePost";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Main({ posts, user }) {
  const { updatePost, isUpdating } = UseUpdatePosts();

  const navigate = useNavigate();
  if (isUpdating) <p>loding</p>;

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
              className="   w-[90px] rounded-lg  "
              src={posts.movie?.Poster}
              alt="Poster photo"
            />
            <div className="  ">
              <h2
                onClick={() => navigate(`/Test/${posts.movie.imdbID}`)}
                className=" cursor-pointer hover:underline  sm:w-auto    w-36    font-semibold sm:text-lg text-base   text-gray-950  "
              >
                {posts.movie?.Title}
              </h2>{" "}
              <p className=" text-gray-700 text-sm font-semibold">
                {posts.movie?.Type}
              </p>
              <p className="  text-gray-700 text-xs font-semibold">
                {posts.movie?.Year}
              </p>
            </div>
          </div>

          <div className=" flex    gap-1 mb-2  ">
            <img
              className="  w-8   h-8     rounded-full "
              src={posts.movie?.Poster}
              alt=" public/Gravity-023.jpg "
            />
            <div className=" flex">
              <div className=" text-gray-900 text-base font-semibold inline-block ml-2 pt-1   ">
                {posts.createBy}
              </div>
            </div>
          </div>
        </div>

        <div className=" text-gray-800  py-2 text-left space-y-4">
          <p className="   text-base  font-medium text-gray-900">
            {" "}
            {posts.caption}{" "}
          </p>

          <div className=" flex justify-between   ">
            <div className=" flex items-center gap-1   pl-7    ">
              <div
                onClick={() => navigate(`/comment/${posts.id}`)}
                className="cursor-pointer hover:bg-slate-100 "
              >
                <FaRegComment style={{ fontSize: "20px" }} />
              </div>
              <div>
                <span className=" h-4 text-xs   text-gray-400">
                  {" "}
                  {posts.comments?.length}
                </span>{" "}
              </div>
            </div>

            <button onClick={handlerEdit} className=" flex items-center pr-7 ">
              {isLike ? (
                <FaHeart style={{ fontSize: "20px", color: "black" }} />
              ) : (
                <FaRegHeart style={{ fontSize: "20px" }} />
              )}{" "}
              <span className=" text-xs   text-gray-400">
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
