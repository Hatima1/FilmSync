import SidebarUser from "../../ui/Sidebaruser";
import usePosts from "../Timeline/usePosts";

function Sidebar() {
  // const { isLoading, Posts } = usePosts();
  const posts = [
    {
      id: "768f40e4-16fb-4356-8844-f5bb44e7aefd",

      createBy: "Daniel",

      createById: "d4d66ae2-7f17-435a-a487-3fb1f6537bda",
      bio: "Man of war",

      img: "https://m.media-amazon.com/images/M/MV5BMTYxMjk0NDg4Ml5BMl5BanBnXkFtZTgwODcyNjA5OTE@._V1_SX300.jpg",
    },
    {
      id: "768f40e4-16fb-4356-8844-f5bb44e7aefd",

      createBy: "omer",
      bio: "There's no place like home.",

      createById: "5e59bce3-8fce-4197-854d-5c2ac4a63866",

      img: "https://yhdlzkcezobnzcfvziho.supabase.co/storage/v1/object/public/profile/avatar-22458aef-0e0d-4f91-aad0-273cf43a2b7b-0.8831647411959453",
    },
    {
      id: "768f40e4-16fb-4356-8844-f5bb44e7aefd",

      createBy: "hatim",

      createById: "22458aef-0e0d-4f91-aad0-273cf43a2b7b",
      bio: "the eyes chico they never lie",

      img: "https://yhdlzkcezobnzcfvziho.supabase.co/storage/v1/object/public/profile/avatar-22458aef-0e0d-4f91-aad0-273cf43a2b7b-0.5842352443863664",
    },
  ];
  // if (isLoading) return <></>;
  // const user = Posts.slice(0, 6);
  // console.log(user);
  return (
    <>
      {posts.map((a) => (
        <SidebarUser user={a} key={a.createById} />
      ))}
    </>
  );
}

export default Sidebar;
