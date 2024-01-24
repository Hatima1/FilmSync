import PublicComment from "./PostComments";

import { UseUserInfo } from "../login/useUserInfo";

import useCurPost from "./useCurPost";
import Spinner from "../../ui/Spinner";
import MainV2 from "../Timeline/mainV2";

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
      <MainV2 posts={posts} user={user} />
      <PublicComment posts={posts} user={user} />
    </>
  );
}

export default MyPost;
