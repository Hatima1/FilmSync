import { Spinner } from "flowbite-react";
import Component from "../../ui/editPtofile";
import { UseUserInfo } from "../login/useUserInfo";
import useEditfollower from "./usefollower";
import useEditUser from "./usefollowing";

function FollowBotton({ profileUser }) {
  const { user, isLoading } = UseUserInfo();
  const { isEditing, edituser } = useEditUser();
  const { editFollower, isLoading: lo } = useEditfollower();

  if (isLoading || isEditing || lo) return <Spinner />;

  const myPtofile = user.id === profileUser.id;

  const authUserFollowingData = user.following;
  const otherUserFolloweD = profileUser.follower;

  const isFollowing = JSON.stringify(authUserFollowingData).includes(
    `${profileUser.id}`
  );

  function handlerUnfollow() {
    const update = authUserFollowingData.filter((a) => a.id !== profileUser.id);
    const updatefo = otherUserFolloweD.filter((a) => a.id !== user.id);

    edituser({ user, update });
    editFollower({ profileUser, updatefo });
  }
  function handlerFollow() {
    const profileUserr = { id: profileUser.id, name: profileUser.name };
    const myuser = { id: user.id, name: user.name };

    const update = [...authUserFollowingData, profileUserr];
    const updatefo = [...otherUserFolloweD, myuser];
    console.log(myuser, "lol");

    edituser({ user, update });
    editFollower({ profileUser, updatefo });
  }
  // <Component user={user} />

  return (
    <div>
      {myPtofile ? (
        <Component user={user} />
      ) : isFollowing ? (
        <button
          disabled={lo}
          onClick={handlerUnfollow}
          className="text-sm   w-20 text-center   p-1 font-medium text-white hover:bg-teal-900     border  bg-teal-950   rounded-full "
        >
          unfollow
        </button>
      ) : (
        <button
          disabled={lo}
          onClick={handlerFollow}
          className="text-sm   w-20 text-center   p-1 font-medium text-white    border bg-teal-950  hover:bg-teal-900  rounded-full "
        >
          Follow
        </button>
      )}
    </div>
  );
}

export default FollowBotton;
