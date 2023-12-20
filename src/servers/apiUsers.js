import supabase from "./supabase";

export async function users() {
  let { data: users, error } = await supabase.from("users").select("*");
  if (error) {
    console.log(error);
  }

  return users;
}

export default async function CreateUser(newusers) {
  const { data, error } = await supabase
    .from("users")
    .insert([newusers])
    .select();

  if (error) {
    console.error(error);
    throw new Error("users could not be add");
  }

  return data;
}
