import { useQuery } from "@tanstack/react-query";

import { getdata } from "../../servers/apiUsers";
import { useParams } from "react-router-dom";
import { getCurPost } from "../../servers/apiPosts";

function useCurPost() {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: CurPost,
  } = useQuery({
    queryKey: ["CurPosts"],
    queryFn: () => getCurPost(id),
  });
  return { isLoading, CurPost, error };
}

export default useCurPost;
