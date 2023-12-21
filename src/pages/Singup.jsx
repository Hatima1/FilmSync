import { useState } from "react";
import useUsers from "../features/login/useAllusers";
import useCreateCapin from "../features/login/ucreCreateUsers";
import { useSignup } from "../features/Auth/UseSingup";

function Singup() {
  const [name, setname] = useState("");
  const [password, setpas] = useState("");
  const [email, setemail] = useState("");
  const { userss } = useUsers();
  console.log(userss);
  const { createusers } = useCreateCapin();
  const { isLoading, signup } = useSignup();
  if (isLoading)
    return (
      <div className=" bg-slate-500 h-screen text-center text-4xl">
        {" "}
        <p>is Loding man </p>
      </div>
    );
  function handlerclick(e) {
    e.preventDefault();
    signup({ email, password });
    const input = {
      name,
      password,
      email,
      id: 200000,
    };
    // createusers(input);
  }
  return (
    <form className=" p-10 " onSubmit={handlerclick}>
      <label>your name</label>
      <input
        id="name"
        className=" border-neutral-950    border  "
        type="text"
        onChange={(e) => setname(e.target.value)}
      />
      <label>your password</label>
      <input
        id="password"
        className=" border-neutral-950 border"
        type="password"
        onChange={(e) => setpas(e.target.value)}
      />
      <label>your email</label>
      <input
        id="emali"
        className=" border-neutral-950 border"
        type="emali"
        placeholder="emali"
        onChange={(e) => setemail(e.target.value)}
      />
      <button>click</button>
    </form>
  );
}

export default Singup;
