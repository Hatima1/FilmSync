import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updatePost as updatePostAPi } from "../../servers/apiPosts";

export function UseUpdatePosts() {
  const queryClient = useQueryClient();

  const { mutate: updatePost, isLoading: isUpdating } = useMutation({
    mutationFn: updatePostAPi,
    onSuccess: () => {
      toast.success("Post  successfully updated");
      queryClient.invalidateQueries(["Posts"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updatePost, isUpdating };
}
