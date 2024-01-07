import { useQuery } from "@tanstack/react-query";

import { getmovie } from "../../servers/apiPosts";
import { useParams } from "react-router-dom";

function useMovieDetails() {
  const { MovieId } = useParams();
  console.log(MovieId);

  const {
    isLoading,
    error,
    data: movie,
  } = useQuery({
    queryKey: ["movieDetails"],
    queryFn: () => getmovie(MovieId),
  });
  return { isLoading, movie, error };
}

export default useMovieDetails;
