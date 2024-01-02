import CreateUser from "./apiUsers";
import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function getCurentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  console.log(session.session.user.id);
  console.log("lol");

  let { data, error } = await supabase.auth.getUser();
  console.log(data);

  if (error) throw new Error(error.message);

  return [data?.user];
}
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function signup({ email, password, name }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (data) {
    await CreateUser({
      id: data.user.id,
      name,
      email,
      following: [],
      follower: [],
      watchlist: [],
      fav: [],

      posts: [],
    });
  }

  if (error) throw new Error(error.message);

  return data;
}

export async function userdata() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;
  console.log(session.session.user.id);

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", session.session.user.id)
    .single();
  // let yourdata;
  // if (data) {
  //   yourdata = await supabase
  //     .from("users")
  //     .select("*")
  //     .eq("id", data.user.id)
  //     .single();
  // }

  if (error) throw new Error(error.message);

  return data;
}

export async function edit({ user, update }) {
  let { data, error } = await supabase
    .from("users")
    .update({
      ...user,
      following: update,
    })
    .eq("id", user.id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
export async function edittt({ profileUser, updatefo }) {
  let { data, error } = await supabase
    .from("users")
    .update({
      ...profileUser,
      follower: updatefo,
    })
    .eq("id", profileUser.id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}
