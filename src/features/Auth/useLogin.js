import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../servers/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UseUserInfo } from "../login/useUserInfo";

export function useLogin() {
  const { user } = UseUserInfo();
  const queryClient = useQueryClient();
  // queryClient.getQueryCache(["user", user]); //get the data from the Cache
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.invalidateQueries({ queryKey: ["loginuser"] });

      // queryClient.invalidateQueries({ queryKey: ["loginuser"] });

      // navigate("/home");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });
  if (login && user) {
    navigate("/");
  }

  return { login, isLoading };
}
