import { useQuery } from "@tanstack/react-query";

import { GetPost } from "../../servers/apiPosts";

function usePosts(x) {
  const {
    isLoading,
    error,
    data: Posts,
  } = useQuery({
    queryKey: ["Posts"],
    queryFn: () => GetPost(x),
  });
  return { isLoading, Posts, error };
}

export default usePosts;
