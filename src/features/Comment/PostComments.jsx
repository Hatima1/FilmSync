import UsersComments from "../Profile/UsersComments";
import { UseUpdatePosts } from "../Timeline/useUpdatePost";
import { useState } from "react";

function PublicComment({ posts, user }) {
  const { updatePost } = UseUpdatePosts();
  const [commentt, setComment] = useState();

  console.log(posts);
  const sortedItemsDesc = posts?.comments?.sort(
    (a, b) => new Date(b.createAt) - new Date(a.createAt)
  );

  function handlerAddcomment() {
    const comment = [
      ...posts.comments,
      { id: user.id, comment: commentt, name: user.name, createAt: new Date() },
    ];
    updatePost({ posts, comment });
  }
  return (
    <div className="   ">
      <div className=" flex  py-4  border-b     gap-1 mb-2  ">
        <img
          className="  w-9   h-9     rounded-full "
          src="../../public/Gravity-023.jpg  "
          alt=" post  photo"
        />
        <div className="  flex  ">
          <textarea
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            className="  sm:w-[25rem]  focus:border-white focus:outline-none border  border-gray-300 rounded-xl bg-gray-50"
          />
          <div className=" self-end">
            <button
              onClick={handlerAddcomment}
              className="text-sm     w-24 text-center   p-2  font-semibold  text-white  border    bg-teal-950   rounded-full "
            >
              post
            </button>
          </div>
        </div>
      </div>
      {posts.comments.map((a) => (
        <UsersComments comment={a.comment} key={a.id} />
      ))}
      {/* <UsersComments  />
      <UsersComments />
      <UsersComments />
      <UsersComments />
      <UsersComments /> */}
    </div>
  );
}

export default PublicComment;
