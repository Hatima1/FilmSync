import { UseUserInfo } from "../features/login/useUserInfo";
import useEditfollower from "./usefollower";
import useEditUser from "./usefollowing";

function FollowBotton({ profileUser }) {
  const { user, isLoading } = UseUserInfo();
  const { isEditing, edituser } = useEditUser();
  const { editFollower, isLoading: lo } = useEditfollower();

  if (isLoading || isEditing || lo) return <p>lol</p>;

  const authUserFollowingData = user.following.map((cur) => JSON.parse(cur));
  const otherUserFolloweD = profileUser.follower.map((cur) => JSON.parse(cur));

  const isFollowing = JSON.stringify(authUserFollowingData).includes(
    `${profileUser.id}`
  );
  console.log(authUserFollowingData, "lol");

  function handlerUnfollow() {
    const update = authUserFollowingData.filter((a) => a.id !== profileUser.id);
    edituser({ user, update });
  }
  function handlerFollow() {
    const update = [...authUserFollowingData, profileUser];
    const updatefo = [...otherUserFolloweD, user];
    console.log(authUserFollowingData, "lol");

    edituser({ user, update });
    editFollower({ profileUser, updatefo });
  }

  return (
    <div>
      {isFollowing ? (
        <button
          onClick={handlerUnfollow}
          className="text-sm   w-20 text-center   p-1 font-medium text-white    border  bg-teal-950   rounded-full "
        >
          unfollow
        </button>
      ) : (
        <button
          onClick={handlerFollow}
          className="text-sm   w-20 text-center   p-1 font-medium text-white    border  bg-teal-950   rounded-full "
        >
          Follow
        </button>
      )}
    </div>
  );
}

export default FollowBotton;
