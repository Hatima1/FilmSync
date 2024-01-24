import { useQuery } from "@tanstack/react-query";

import { getdata } from "../../servers/apiUsers";
import { useLocation } from "react-router-dom";

function useProfile() {
  // const { myname } = useParams();
  const x = useLocation();
  const myname = x.pathname.split("/").at(-1);

  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["profile", myname],
    queryFn: () => getdata(myname),
  });
  return { isLoading, user, error };
}

export default useProfile;
