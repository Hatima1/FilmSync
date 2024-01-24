import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../servers/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(` welcome  `);
      queryClient.invalidateQueries({ queryKey: ["loginuser"] });

      // navigate("/home");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("email is already  use");
    },
  });

  return { signup, isLoading };
}
