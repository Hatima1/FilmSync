import { useState } from "react";
import useUsers from "../features/login/uselogin";
import useCreateCapin from "../features/login/ucreCreateUsers";

function Singup() {
  const [name, setname] = useState("");
  const [password, setpas] = useState("");
  const [email, setemail] = useState("");
  const { userss } = useUsers();
  console.log(userss);
  const { createusers } = useCreateCapin();
  let id;

  function handlerclick(e) {
    e.preventDefault();
    const input = {
      name,
      password,
      email,
      id: 21,
    };
    createusers(input);
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
