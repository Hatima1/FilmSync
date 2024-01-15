import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { username } from "../../servers/apiUsers";

function UseUsersName(name) {
  const {
    isLoading,
    error,
    mutate: userNamea,
  } = useQuery({
    queryKey: ["userSearch", name],
    queryFn: () => username(name),
  });
  return { isLoading, userNamea, error };
}

export default UseUsersName;
