import { useState } from "react";

import { UseUserInfo } from "../login/useUserInfo";
import { useCreatPost } from "../Timeline/useNewPosts";
import { UseUser } from "../Auth/useUser";

function Share() {
  const [text, settext] = useState();
  const { user: us } = UseUser();
  const { user } = UseUserInfo();

  const { CreatePost } = useCreatPost();

  function handlerText() {
    const newPost = {
      createBy: user.name,
      caption: text,
    };
    console.log(newPost);
    CreatePost(newPost);
  }
  return (
    <div className=" max-w-7xl mx-auto ">
      <div className=" mt-11 mb-11 flex gap-2 ">
        <img
          className=" mr-2  w-9   h-9     rounded-full "
          src="../../public/Gravity-023.jpg  "
        />
        <div className="     ">
          <div className="  ">
            <textarea
              onChange={(e) => settext(e.target.value)}
              rows={5}
              cols={50}
              className=" text-xl text-black bg-slate-100 p-2  rounded-xl "
              placeholder="What new"
            ></textarea>
          </div>
        </div>
        <div className=" flex   flex-col  justify-end    ">
          <div className="  ">
            <button
              onClick={handlerText}
              className=" px-8 py-2 text-white bg-teal-800 rounded-full text-lg font-semibold  "
            >
              click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
