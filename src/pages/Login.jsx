import { useEffect, useState } from "react";
import useUsers from "../features/login/useAllusers";
import useCreateCapin from "../features/login/ucreCreateUsers";
import { useLogin } from "../features/Auth/useLogin";
import { UseUser } from "../features/Auth/useUser";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpas] = useState("");

  const { login, isLoading } = useLogin();
  const { user } = UseUser();

  if (isLoading) return <h1>is loding </h1>;

  function handlerclick(e) {
    e.preventDefault();

    login({ email, password });
  }
  return (
    <form className=" p-10 " onSubmit={handlerclick}>
      <label>your name</label>
      <input
        id="email"
        className=" border-neutral-950    border  "
        type="text"
        onChange={(e) => setemail(e.target.value)}
      />
      <label>your password</label>
      <input
        id="password"
        className=" border-neutral-950 border"
        type="password"
        onChange={(e) => setpas(e.target.value)}
      />

      <button>click</button>
    </form>
  );
}

export default Login;
