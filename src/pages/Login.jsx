import { useEffect, useState } from "react";
import useUsers from "../features/login/useAllusers";
import useCreateCapin from "../features/login/ucreCreateUsers";
import { useLogin } from "../features/Auth/useLogin";
import { UseUser } from "../features/Auth/useUser";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useSignup } from "../features/Auth/UseSingup";
import { UseUserInfo } from "../features/login/useUserInfo";

function Login() {
  const navgate = useNavigate();
  const [newAcount, setnewAcount] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpas] = useState("");

  const { login, isLoading } = useLogin();
  const { isLoading: l, signup } = useSignup();
  const { user, isLoading: lo } = UseUserInfo();
  if (isLoading) return <p>man</p>;

  function handlerclick(e) {
    e.preventDefault();
    if (newAcount === false) login({ email, password });
    if (newAcount === true) signup({ email, password, name });
  }
  return (
    <div className="  bg-gray-50  ">
      <div className="  max-w-96  mx-auto items-center   h-svh      grid grid-cols-1   ">
        <form
          onSubmit={handlerclick}
          className="flex     flex-col p-4 bg-gray-100 rounded-md   shadow-md   gap-4"
        >
          <div className=" justify-center flex  items-center ">
            <img
              className="  h-10 w-auto"
              src="icons8-comedy-100.png"
              alt=" logo"
              height="8"
              width="auto"
            />
            <div className=" font-semibold text-gray-900  text-sm   md:text-lg">
              FilmSync{" "}
            </div>
          </div>
          {newAcount && (
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                onChange={(e) => setname(e.target.value)}
                id="name"
                type="text"
                placeholder="name"
                required
              />
            </div>
          )}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              onChange={(e) => setemail(e.target.value)}
              id="email1"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              placeholder="password"
              onChange={(e) => setpas(e.target.value)}
            />
          </div>
          <div className="flex  gap-2"></div>
          <button
            type="submit"
            className=" text-white p-2 rounded-md font-semibold bg-teal-900 hover:bg-teal-800"
          >
            {newAcount ? "Create Acount" : "Login"}
          </button>
          {newAcount === false && (
            <div className=" text-center  text-sm font-semibold text-gray-800">
              Create new acount?
              <button
                onClick={() => setnewAcount(true)}
                className=" text-gray-950 font-bold text-base "
              >
                join
              </button>
            </div>
          )}
          {newAcount === true && (
            <div className=" text-center  text-sm font-semibold text-gray-800">
              Already have an acount?
              <button
                disabled={isLoading}
                onClick={() => setnewAcount(false)}
                className=" text-gray-950 font-bold text-base "
              >
                click
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

// <form className=" p-10 " onSubmit={handlerclick}>
//   <label>your name</label>
//   <input
//     id="email"
//     className=" border-neutral-950    border  "
//     type="text"
//     onChange={(e) => setemail(e.target.value)}
//   />
//   <label>your password</label>
//   <input
//     id="password"
//     className=" border-neutral-950 border"
//     type="password"
//     onChange={(e) => setpas(e.target.value)}
//   />

//   <button>click</button>
// </form>
