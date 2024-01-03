import { useQuery } from "@tanstack/react-query";

import { getdata } from "../../servers/apiUsers";
import { useParams } from "react-router-dom";

function useProfile() {
  const { myname } = useParams();
  // console.log(myname);

  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getdata(myname),
  });
  return { isLoading, user, error };
}

export default useProfile;
