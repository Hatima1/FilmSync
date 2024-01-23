import { Spinner } from "flowbite-react";
import MainProfile from "./MainProfile";
import useProfile from "./useProfile";

function Profile({ setmovoe }) {
  const { user, isLoading } = useProfile();
  if (isLoading) return <Spinner />;
  return (
    <div className=" bg-gray-50   ">
      <div className=" min-h-screen border bg-gray-50 max-w-7xl mx-auto  ">
        <MainProfile setmovoe={setmovoe} user={user} />
      </div>
    </div>
  );
}

export default Profile;
