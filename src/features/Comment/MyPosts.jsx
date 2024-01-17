import { CiHeart } from "react-icons/ci";
import { FaComment, FaRegComment } from "react-icons/fa";
import PublicComment from "./PostComments";
import { IoIosCopy } from "react-icons/io";
import { UseUserInfo } from "../login/useUserInfo";
import Main from "../Timeline/Main";
import usePosts from "../Timeline/usePosts";
import useCurPost from "./useCurPost";
import Spinner from "../../ui/Spinner";

function MyPost() {
  const { user, isLoading } = UseUserInfo();

  const { CurPost, isLoading: lo } = useCurPost();
  if (isLoading || lo) return <Spinner />;

  const posts = CurPost;
  // const sortedItemsDesc = Posts.sort(
  //   (a, b) => new Date(b.created_at) - new Date(a.created_at)
  // );
  // console.log(sortedItemsDesc);

  return (
    <>
      <Main posts={posts} user={user} />
      <PublicComment posts={posts} user={user} />
    </>
  );
}

export default MyPost;
