import supabase from "./supabase";
const apiKey = "7a77ec3a";

export async function CreatePost(newpost) {
  console.log(newpost);
  const { data, error } = await supabase
    .from("Posts")
    .insert([newpost])
    .select();

  if (error) {
    console.error(error);
    throw new Error("users could not be add");
  }

  return data;
}

export async function GetPost() {
  let { data, error } = await supabase.from("Posts").select("*");

  if (error) {
    console.error(error);
    throw new Error("users could not be add");
  }

  return data;
}
// export async function getmovie({ mov }) {
//   console.log(mov);
//   if (mov.length < 3) return null;

//   const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${mov} `);

//   const data = await res.json();
//   console.log(data);
//   // if (error) {
//   //   console.error(error);
//   //   throw new Error("users could not be add");
//   // }

//   return data;
// }
