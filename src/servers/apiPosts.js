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
export async function getmovie(MovieId) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${MovieId} `
  );

  if (!res.ok) throw new Error("Something went wrong with fetching movies");

  const data = await res.json();
  if (data.Response === "False") throw new Error("Movie not found");
  console.log(data);
  // if (error) {
  //   console.error(error);
  //   throw new Error("users could not be add");
  // }

  return data;
}
