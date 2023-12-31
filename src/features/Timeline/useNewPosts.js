import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatePost as CreatePostApi } from "../../servers/apiPosts";
import { toast } from "react-hot-toast";

export function useCreatPost() {
  const queryClientt = useQueryClient();
  const { mutate: CreatePost, isLoading } = useMutation({
    mutationFn: (newpost) => CreatePostApi(newpost),
    onSuccess: (post) => {
      queryClientt.invalidateQueries({ active: true });
      console.log(post);
      toast.success("done");
    },
  });

  return { CreatePost, isLoading };
}
