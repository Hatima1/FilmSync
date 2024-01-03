import Header from "./Header";
import MyComments from "./MyComments";
import useProfile from "./useProfile";
import Sidebar from "./sidebar";
import PublicComment from "./PublicComment";

function MainProfile() {
  const { user, isLoading } = useProfile();
  if (isLoading) return <p>loding</p>;

  console.log(user.posts.length);

  return (
    <div className="  ">
      <div className=" overscroll-none grid-cols-1    grid  sm:grid-cols-[2fr_auto] bg-gray-50 p-1">
        <div className="  ">
          <Header user={user} />
          <MyComments />
          <PublicComment />
        </div>
        <div className="  border-l    pt-28 ">
          <p className=" text-gray-950 font-bold text-lg ml-2 "> suggestion </p>
          <div className="flex border-t  flex-col gap-3  bg-gray-100  p-2  rounded-tr-xl rounded-br-xl ">
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

export default MainProfile;
