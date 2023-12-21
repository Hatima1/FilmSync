import { Uselogout } from "../features/Auth/useLogout";

function Logout() {
  const { isLoading, logout } = Uselogout();
  if (isLoading) <p className=" -mt-10">is Loooooooding</p>;
  return (
    <div className=" absolute top-2/4  ">
      <button onClick={() => logout()} className=" p-10 bg-slate-500  ">
        {" "}
        logout
      </button>
    </div>
  );
}

export default Logout;
