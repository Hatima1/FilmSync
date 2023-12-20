import { useMutation, useQueryClient } from "@tanstack/react-query";
import CreateUser from "../../servers/apiUsers";
import toast from "react-hot-toast";

export default function useCreateCapin() {
  const queryClientt = useQueryClient();

  const { isLoading: isCreating, mutate: createusers } = useMutation({
    mutationFn: (newusers) => CreateUser(newusers),
    onSuccess: () => {
      toast.success("cabin successfuly add");
      queryClientt.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (er) => toast.error(er.message),
  });
  return { isCreating, createusers };
}
