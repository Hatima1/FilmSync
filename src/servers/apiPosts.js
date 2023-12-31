import supabase from "./supabase";

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
  
  let { data, error } = await supabase
  .from('Posts')
  .select('*')

  if (error) {
    console.error(error);
    throw new Error("users could not be add");
  }

  return data;
}





