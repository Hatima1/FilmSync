import Comment from "../features/Details/Comment";
import Main from "../features/Timeline/Main";
import Share from "../features/Timeline/Share";
import usePosts from "../features/Timeline/usePosts";
function Timeline() {
  const { Posts, isLoading } = usePosts();
  if (isLoading) return <p>loding</p>;
  console.log(Posts);
  return (
    <div className="   bg-white h-[1000px] ">
      <Share />

      {Posts.map((posts) => (
        <Main posts={posts} key={posts.id} />
      ))}
    </div>
  );
}

export default Timeline;
