import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { edit } from "../servers/apiAuth";

export default function useEditUser() {
  const queryClientt = useQueryClient();

  const { isLoading: isEditing, mutate: edituser } = useMutation({
    mutationFn: ({ user, update }) => edit({ user, update }),
    onSuccess: () => {
      queryClientt.invalidateQueries({ queryKey: ["loginuser"] });
      toast.success("edite successfuly add");
    },
    onError: (er) => toast.error(er.message),
  });
  return { isEditing, edituser };
}
