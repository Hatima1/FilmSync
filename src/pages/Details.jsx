import MovieDetails from "../features/Details/MovieDetails";
import Comment from "../features/Details/Comment";
import usePosts from "../features/Timeline/usePosts";
import UsersComments from "../features/Profile/UsersComments";
import CommentUserDetails from "../ui/CommentUserDetails";
import { useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";

// import StarRating from "../ui/StarRating";
function Details({ moviee }) {
  console.log(moviee);
  const { MovieId } = useParams();
  const { Posts, isLoading } = usePosts(MovieId);

  if (isLoading)
    return (
      <div className=" w-full text-center ">
        {" "}
        <Spinner />
      </div>
    );
  console.log(Posts);

  // const CommentAboutMovie = Posts.map((a) =>);

  // console.log(usersPost);

  return (
    <div className="bg-gray-50 ">
      <div className=" max-w-7xl mx-auto  px-4  pt-14  ">
        <MovieDetails moviee={moviee} />
        <div className=" border-t  ">
          <h2 className="  text-base xl:text-2xl font-semibold  mt-3     inline-block  text-gray-950 ">
            {" "}
            Popular Reviews{" "}
          </h2>
          <div className="  w-24  xl:w-36   border-b-2 border-teal-900   "></div>

          {/* {Posts.map((post) => (
            <CommentUserDetails post={post} key={post.id} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Details;
