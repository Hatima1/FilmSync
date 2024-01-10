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

export async function updateCurrentUser({
  user,
  UpdateDetails,
  newWhatch,
  newFav,
}) {
  // 1. Update password OR fullName
  // let updateData;
  // if (password) updateData = { password };
  // if (fullName) updateData = { data: { fullName } };

  let query = supabase.from("users");
  if (newFav)
    query = query
      .update({ ...user, fav: newFav })
      .eq("id", user.id)
      .select();
  if (newWhatch)
    query = query
      .update({ ...user, watchlist: newWhatch })
      .eq("id", user.id)
      .select();
  if (UpdateDetails)
    query = query
      .update({ name: UpdateDetails.name, bio: UpdateDetails.bio })
      .eq("id", user.id)
      .select();

  const { data, error } = await query.select();

  if (error) throw new Error(error.message);
  if (!UpdateDetails?.avatar) return data;

  // 2. Upload the avatar image
  console.log(UpdateDetails.avatar);
  const fileName = `${Math.random()}${UpdateDetails.avatar.name}`;
  const imgePath = `${supabaseUrl}/storage/v1/object/public/profile/${UpdateDetails.avatar.name}`;

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

export async function getdata(myname) {
  // console.log(username);
  if (!myname) return;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", myname)
    .single();

  if (error) throw new Error(error.message);
  // console.log(data);

  return data;
}
