// import CreateUser from "./apiUsers";
// import supabase from "./supabase";
// let d;

// export async function login({ email, password }) {
//   console.log(email, password);
//   let { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) throw new Error(error.message);
//   const { user } = data;

//   const { data: Data2, error: ereor2 } = await supabase
//     .from("users")
//     .select("*")
//     .eq("id", user.id)
//     .single();
//   if (ereor2) throw new Error(error.message);
//   d = Data2;

//   if (Data2) return data;
// }

// export async function getCurentUser() {
//   const { data: session } = await supabase.auth.getSession();
//   if (!session.session) return null;
//   console.log(session.session.user.id);

//   let { data, error } = await supabase.auth.getUser();
//   // console.log(data);

//   if (error) throw new Error(error.message);

//   return [data?.user];
// }
// export async function logout() {
//   const { error } = await supabase.auth.signOut();

//   if (error) throw new Error(error.message);
//   d = null;
// }

// export async function signup({ email, password, name }) {
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//   });

//   if (error) throw new Error(error.message);

//   const newusers = {
//     id: data.user.id,
//     name,
//     email,
//     following: [],
//     follower: [],
//     watchlist: [],
//     fav: [],
//     posts: [],
//   };

//   const { data: data2, error: ereor2 } = await supabase
//     .from("users")
//     .insert([newusers])
//     .select()
//     .single();

//   if (ereor2) {
//     console.error(error);
//     throw new Error("users could not be add");
//   }
//   d = data2;

//   return data2;
// }

// export async function userdata() {
//   if (!d) {
//     d = null;
//     return null;
//   }
//   console.log(d);

//   return d;
// }

// export async function edit({ user, update }) {
//   let { data, error } = await supabase
//     .from("users")
//     .update({
//       ...user,
//       following: update,
//     })
//     .eq("id", user.id)
//     .select();

//   if (error) throw new Error(error.message);

//   return data;
// }
// export async function edittt({ profileUser, updatefo }) {
//   let { data, error } = await supabase
//     .from("users")
//     .update({
//       ...profileUser,
//       follower: updatefo,
//     })
//     .eq("id", profileUser.id)
//     .select();

//   if (error) throw new Error(error.message);

//   return data;
// }
// //
