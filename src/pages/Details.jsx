import MovieDetails from "../features/Details/MovieDetails";
// import Comment from "../features/Details/Comment";
// import usePosts from "../features/Timeline/usePosts";
// import UsersComments from "../features/Profile/UsersComments";
// import CommentUserDetails from "../ui/CommentUserDetails";

import ShareMovie from "../features/Details/ShareMovie";
import { UseUserInfo } from "../features/login/useUserInfo";
import PageNotFound from "./PageNotFound";

// import StarRating from "../ui/StarRating";
function Details({ moviee }) {
  const { user } = UseUserInfo();

  // const { MovieId } = useParams();
  // const { Posts, isLoading } = usePosts(MovieId);

  // if (isLoading)
  //   return (
  //     <div className=" w-full text-center ">
  //       {" "}
  //       <Spinner />
  //     </div>
  //   );
  // console.log(Posts);
  if (!moviee) return <PageNotFound />;

  return (
    <div className="bg-gray-50 ">
      <div className=" max-w-7xl mx-auto  px-4  pt-14  ">
        <MovieDetails moviee={moviee} />
        <div className=" border-t pb-4  ">
          <p className="  text-base   md:text-lg  font-semibold  mt-3     inline-block  text-gray-950 ">
            {" "}
            leave a comment
            <span className=" text-xs  ">
              {" "}
              (your comment will be post in timline){" "}
            </span>
          </p>
          <div className="   w-28    xl:w-36   border-b-2 border-teal-900    space-y-5  "></div>
          <ShareMovie user={user} movie={moviee} />

          {/* {Posts.map((post) => (
            <CommentUserDetails post={post} key={post.id} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Details;
