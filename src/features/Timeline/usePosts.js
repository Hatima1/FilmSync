import { useQuery } from "@tanstack/react-query";

import { GetPost } from "../../servers/apiPosts";

function usePosts(MovieId) {
  const {
    isLoading,
    error,
    data: Posts,
  } = useQuery({
    queryKey: ["Posts", MovieId],
    queryFn: () => GetPost(MovieId),
  });
  return { isLoading, Posts, error };
}

export default usePosts;
