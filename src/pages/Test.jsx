import MovieDetails from "../features/Details/MovieDetails";
import Comment from "../features/Details/Comment";
import usePosts from "../features/Timeline/usePosts";
import UsersComments from "../features/Profile/UsersComments";
import CommentUserDetails from "../ui/CommentUserDetails";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

// import StarRating from "../ui/StarRating";
function Test() {
  const { MovieId } = useParams();
  const { Posts, isLoading } = usePosts(MovieId);

  if (isLoading)
    return (
      <div className=" w-full text-center ">
        {" "}
        <Spinner />
      </div>
    );

  // const CommentAboutMovie = Posts.map((a) =>);
  console.log(Posts);
  // console.log(usersPost);

  return (
    <div className=" max-w-7xl mx-auto  px-4 pt-1   ">
      <MovieDetails />
      <div className=" border-t  ">
        <h2 className=" text-base xl:text-2xl font-semibold mb-5 mt-3 underline  underline-offset-8    text-gray-950 ">
          {" "}
          Popular Reviews{" "}
        </h2>
        {Posts.map((post) => (
          <CommentUserDetails post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Test;
