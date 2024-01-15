import { useQuery } from "@tanstack/react-query";

import { userId } from "../../servers/apiUsers";

function UseUserPr(id) {
  const {
    isLoading,
    error,
    data: userProfile,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => userId(id),
  });
  return { isLoading, userProfile, error };
}

export default UseUserPr;
