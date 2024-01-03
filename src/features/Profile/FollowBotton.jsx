import { UseUserInfo } from "../login/useUserInfo";
import useEditfollower from "./usefollower";
import useEditUser from "./usefollowing";

function FollowBotton({ profileUser }) {
  const { user, isLoading } = UseUserInfo();
  const { isEditing, edituser } = useEditUser();
  const { editFollower, isLoading: lo } = useEditfollower();

  if (isLoading || isEditing || lo) return <p>lol</p>;
  const myPtofile = user.id === profileUser.id;

  const authUserFollowingData = user.following.map((cur) => JSON.parse(cur));
  const otherUserFolloweD = profileUser.follower.map((cur) => JSON.parse(cur));

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
    const update = [...authUserFollowingData, profileUser];
    const updatefo = [...otherUserFolloweD, user];
    console.log(authUserFollowingData, "lol");

    edituser({ user, update });
    editFollower({ profileUser, updatefo });
  }

  return (
    <div>
      {myPtofile ? (
        <button className="  text-sm   w-24 text-center   p-2  font-semibold  text-white  border    bg-teal-950   rounded-full  ">
          edit profile
        </button>
      ) : isFollowing ? (
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
