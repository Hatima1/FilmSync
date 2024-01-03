import supabase from "./supabase";
const supabaseUrl = "https://yhdlzkcezobnzcfvziho.supabase.co";

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
//yhdlzkcezobnzcfvziho.supabase.co/storage/v1/object/public/profilePic/logo-dark.png

export async function updateCurrentUser({ user, bio, name, avatar }) {
  // 1. Update password OR fullName
  // let updateData;
  // if (password) updateData = { password };
  // if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase
    .from("users")
    .update({ ...user, name: name, bio: bio })
    .eq("id", user.id)
    .select();

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  console.log(avatar);
  const fileName = `${Math.random()}${avatar.name}`;
  const imgePath = `${supabaseUrl}/storage/v1/object/public/profile/${avatar.name}`;

  const { error: storageError } = await supabase.storage
    .from("profile")
    .upload(fileName, imgePath);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  // const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
  //   data: {
  //     avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
  //   },
  // });

  // if (error2) throw new Error(error2.message);
  return data;
}

export async function getdata(username) {
  // console.log(username);
  if (!username) return;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", username)
    .single();

  if (error) throw new Error(error.message);
  // console.log(data);

  return data;
}
