import { useQuery } from "@tanstack/react-query";

import { getdata } from "../servers/apiUsers";
import { useParams } from "react-router-dom";

function useProfile() {
  const { name } = useParams();
  console.log(name);

  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["users"],
    queryFn: (name) => getdata(name),
  });
  return { isLoading, user, error };
}

export default useProfile;
