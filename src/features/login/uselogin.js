import { useQuery } from "@tanstack/react-query";

import { users } from "../../servers/apiUsers";

function useUsers() {
  const {
    isLoading,
    error,
    data: userss,
  } = useQuery({
    queryKey: ["users"],
    queryFn: users,
  });
  return { isLoading, userss, error };
}

export default useUsers;
