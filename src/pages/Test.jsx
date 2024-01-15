import MovieDetails from "../features/Details/MovieDetails";
import Comment from "../features/Details/Comment";
import usePosts from "../features/Timeline/usePosts";
import UsersComments from "../features/Profile/UsersComments";
import CommentUserDetails from "../ui/CommentUserDetails";
import { useParams } from "react-router-dom";
// import StarRating from "../ui/StarRating";
function Test() {
  const { MovieId } = useParams();
  const { Posts, isLoading } = usePosts();
  if (isLoading) return <p>lol</p>;
  // const CommentAboutMovie = Posts.map((a) =>);
  console.log(Posts);
  const usersPost = Posts.filter((a) => a.movie.imdbID === MovieId);
  console.log(usersPost);

  return (
    <div className=" max-w-7xl mx-auto p-4   ">
      <MovieDetails />
      <div className=" border-t  ">
        <h2 className=" text-2xl font-semibold  mb-5 mt-3 underline  underline-offset-8    text-gray-950 ">
          {" "}
          Popular Reviews{" "}
        </h2>
        {usersPost.map((post) => (
          <CommentUserDetails post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Test;
