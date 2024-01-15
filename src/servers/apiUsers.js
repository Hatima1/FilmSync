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
// const fileName = `avatar-${data.user.id}-${Math.random()}`;

// const { error: storageError } = await supabase.storage
//   .from("avatars")
//   .upload(fileName, avatar);

// if (storageError) throw new Error(storageError.message);

// // 3. Update avatar in the user
// const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
//   data: {
//     avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
//   },
// });

// if (error2) throw new Error(error2.message);
// return updatedUser;

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
      .eq("id", user.id);

  const { data, error } = await query.select();
  console.log(data[0]);

  if (error) throw new Error(error.message);
  if (!UpdateDetails?.avatar) return data;

  // 2. Upload the avatar image
  console.log(UpdateDetails.avatar);
  // const fileName = `${Math.random()}${UpdateDetails.avatar.name}`;
  // const imgePath = `${supabaseUrl}/storage/v1/object/public/profile/${UpdateDetails.avatar.name}`;
  const fileName = `avatar-${data[0].id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("profile")
    .upload(fileName, UpdateDetails.avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  // const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
  //   data: {
  //     avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
  //   },
  // });
  // https://yhdlzkcezobnzcfvziho.supabase.co/storage/v1/object/public/profile/avatar-bce51056-8e4d-482a-b052-82f0674883a8-0.4148580992855928
  // https://yhdlzkcezobnzcfvziho.supabase.co/storage/v1/object/public/profile/avatar/avatar-bce51056-8e4d-482a-b052-82f0674883a8-0.7498631624435721
  // console.log(`${supabaseUrl}/storage/v1/object/public/profile/${fileName}`);
  const { data: updateImg, error: erroe2 } = await supabase
    .from("users")
    .update({
      ...user,
      avatar: `${supabaseUrl}/storage/v1/object/public/profile/${fileName}`,
    })
    .eq("id", user.id)
    .select();

  if (erroe2) throw new Error(erroe2.message);
  return updateImg;
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
export async function userId(id) {
  console.log(id);
  // console.log(username);

  const { data, error } = await supabase
    .from("users")
    .select("avatar")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  // console.log(data);

  return data;
}
export async function username(name) {
  // console.log(username);

  if (!name || name.length < 4) return null;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("name", name)
    .single();

  if (error) throw new Error(error.message);
  console.log(data);

  return data;
}
