import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function getCurentUser() {
  const { data: session } = await supabase.auth.getSession();
  console.log(session);
  if (!session.session) return null;

  let { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
    
  });

  if (error) throw new Error(error.message);

  return data;
}
