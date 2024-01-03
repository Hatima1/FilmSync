import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { edittt } from "../../servers/apiAuth";

export default function useEditfollower() {
  const queryClientt = useQueryClient();

  const { isLoading: isEditing, mutate: editFollower } = useMutation({
    mutationFn: ({ profileUser, updatefo }) =>
      edittt({ profileUser, updatefo }),
    onSuccess: () => {
      queryClientt.invalidateQueries({ queryKey: ["users"] });
      toast.success("edite successfuly add");
    },
    onError: (er) => toast.error(er.message),
  });
  return { isEditing, editFollower };
}
