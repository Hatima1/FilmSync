import { useQuery } from "@tanstack/react-query";
import { userdata } from "../../servers/apiAuth";

export function UseUserInfo() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["loginuser"],
    queryFn: userdata,
  });

  return {
    isLoading,
    user,
  };
}
