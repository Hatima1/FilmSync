import MainProfile from "./MainProfile";

function Profile({ setmovoe }) {
  return (
    <div className=" bg-gray-50   ">
      <div className=" min-h-screen border bg-gray-50 max-w-7xl mx-auto  ">
        <MainProfile setmovoe={setmovoe} />
      </div>
    </div>
  );
}

export default Profile;
