import supabase from "./supabase";

export async function users() {
  let { data: users, error } = await supabase.from("users").select("*");
  if (error) {
    console.log(error);
  }

  return users;
}

export default async function CreateUser(newusers) {
  console.log(newusers);
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

export async function getdata(username) {
  console.log(username);
  if (!username) return;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", username)
    .single();

  if (error) throw new Error(error.message);
  console.log(data);

  return data;
}
