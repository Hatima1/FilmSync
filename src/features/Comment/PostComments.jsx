import UsersComments from "../Profile/UsersComments";
import { UseUpdatePosts } from "../Timeline/useUpdatePost";
import { useState } from "react";

function PublicComment({ posts, user }) {
  const { updatePost } = UseUpdatePosts();
  const [commentt, setComment] = useState();

  const sortedItemsDesc = posts?.comments?.sort(
    (a, b) => new Date(b.createAt) - new Date(a.createAt)
  );

  function handlerAddcomment() {
    const comment = {
      id: user.id,
      comment: commentt,
      name: user.name,
      createAt: Date.now(),
    };
    setComment("");
    // const comment = [
    //   ...posts.comments,
    //   { id: user.id, comment: commentt, name: user.name, createAt: new Date() },
    // ];
    updatePost({ posts, comment });
  }
  return (
    <div className="     ">
      <div className=" flex  py-3  border-b px-2     gap-1 mb-2  ">
        <img
          className="  w-8   h-8     rounded-full "
          src={user.avatar ? user.avatar : "../download.jpeg"}
          alt=" post  photo"
        />
        <div className="  flex gap-x-1   ">
          <textarea
            value={commentt}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="   sm:w-[25rem]  focus:border-white focus:outline-none border  border-gray-300 rounded-xl bg-gray-50"
          />
          <div className=" self-end">
            <button
              disabled={!commentt}
              onClick={handlerAddcomment}
              className="text-smv    w-24 text-center   p-2  font-semibold  text-white  border    bg-teal-950   rounded-full "
            >
              post
            </button>
          </div>
        </div>
      </div>
      {posts.comments.map((a) => (
        <UsersComments comment={a} key={a.createAt} />
      ))}
      {posts.comments.length === 0 && (
        <p className=" font-semibold text-base text-center  my-5 ">
          {" "}
          no comment yet be the first one {";) "}
        </p>
      )}
    </div>
  );
}

export default PublicComment;
