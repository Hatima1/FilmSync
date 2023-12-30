import supabase from "./supabase";

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
