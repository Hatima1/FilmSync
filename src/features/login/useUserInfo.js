import { useQuery } from "@tanstack/react-query";
import { userdata } from "../../servers/apiAuth";

export function UseUserInfo() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["userrr"],
    queryFn: userdata,
  });

  return {
    isLoading,
    user,
  };
}
