import { useQuery } from "@tanstack/react-query";

import { GetPost } from "../../servers/apiPosts";

function usePosts(MovieId) {
  const {
    isLoading,
    error,
    data: Posts,
  } = useQuery({
    queryKey: ["Posts"],
    queryFn: () => GetPost(),
  });
  return { isLoading, Posts, error };
}

export default usePosts;
