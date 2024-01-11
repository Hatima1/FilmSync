import MovieDetails from "../features/Details/MovieDetails";
import Comment from "../features/Details/Comment";
import usePosts from "../features/Timeline/usePosts";
import UsersComments from "../features/Profile/UsersComments";
// import StarRating from "../ui/StarRating";
function Test() {
  const { Posts, isLoading } = usePosts("lol");
  if (isLoading) return <p>lol</p>;
  // const CommentAboutMovie = Posts.map((a) =>);

  return (
    <div className=" max-w-7xl mx-auto p-4   ">
      <MovieDetails />
      <h2 className=" text-2xl font-semibold  mb-16 text-center text-gray-900 ">
        {" "}
        Popular Reviews{" "}
      </h2>
      {Posts.map((post) => (
        <UsersComments comment={post.caption} key={post.id} />
      ))}
    </div>
  );
}

export default Test;
