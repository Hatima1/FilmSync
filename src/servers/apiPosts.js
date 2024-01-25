import supabase from "./supabase";
const supabaseUrl = "https://yhdlzkcezobnzcfvziho.supabase.co";
const apiKey = "7a77ec3a";

export async function CreatePost(newpost) {
  const { img, createat } = newpost;
  let data, error, Movieshare;

  if (typeof img !== "object") {
    Movieshare = img?.includes("https://m.media-amazon.com/images/");
  }

  if (img && !Movieshare) {
    const fileName = `avatar-${createat}-${Math.random()}`;

    const { error: storageError } = await supabase.storage
      .from("post")
      .upload(fileName, img);

    if (storageError) throw new Error(storageError.message);

    {
      data, error;
    }
    await supabase
      .from("Posts")
      .insert([
        {
          ...newpost,
          img: `${supabaseUrl}/storage/v1/object/public/post/${fileName}`,
        },
      ])
      .select();

    if (error) {
      console.error(error);
      throw new Error("post could not be add");
    }
  }
  if (!img || Movieshare) {
    {
      data, error;
    }
    await supabase.from("Posts").insert([newpost]).select();

    if (error) {
      console.error(error);
      throw new Error("post could not be add");
    }
  }

  return data;
}

export async function GetPost(x) {
  let query = supabase.from("Posts");
  if (x)
    query = query
      .select("*")
      .eq("createById", x)
      .order("createat", { ascending: false });
  if (!x)
    query = query.select("*").order("createat", { ascending: false }).limit(40);

  let { data, error } = await query;

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
export async function updatePost({ posts, newLike, comment }) {
  let query = supabase.from("Posts");
  if (!comment)
    query = query.update({ likes: newLike }).eq("id", posts.id).select();
  if (comment)
    query = query
      .update({ comments: [...posts.comments, comment] })
      .eq("id", posts.id)
      .select();

  let { data, error } = await query.select();

  if (error) throw new Error(error.message);

  return data;
}
export async function getCurPost(id) {
  let { data, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("users could not be add");
  }

  return data;
}
