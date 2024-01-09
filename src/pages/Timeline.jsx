import Main from "../features/Timeline/Main";
import Share from "../features/Timeline/Share";
import usePosts from "../features/Timeline/usePosts";
import Sidebar from "../features/Profile/sidebar";
import Navbar from "../ui/navbar";
import SelectTimline from "../features/Timeline/SelectTimline";
// import { UseMove } from "../features/movie/useMovie";
import MovieSearch from "../features/movie/movieSearch";
import { UseUserInfo } from "../features/login/useUserInfo";
function Timeline() {
  const { user, isLoading: islo } = UseUserInfo();
  const { Posts, isLoading } = usePosts();
  // const { movie, isLoading: s } = UseMove();
  if (isLoading || islo) return <p>loding</p>;
  const sortedItemsDesc = Posts.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  console.log(sortedItemsDesc);

  return (
    <div className="max-w-7xl mx-auto   bg-gray-50  ">
      {/* <Navbar /> */}

      <div className="  grid-cols-1 border-l    grid  sm:grid-cols-[2fr_auto]  px-1   ">
        <div>
          <MovieSearch />
          <SelectTimline />
          <Share user={user} />

          {Posts.map((posts) => (
            <Main user={user} posts={posts} key={posts.id} />
          ))}
        </div>

        <div className="  border-l    pt-24 ">
          <p className=" text-gray-950 font-bold text-lg ml-2 "> suggestion </p>
          <div className="flex border-t  border-b flex-col gap-3  bg-gray-100  p-2  rounded-tr-xl rounded-br-xl ">
            <Sidebar />
            <Sidebar />
            <Sidebar />
            <Sidebar />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
