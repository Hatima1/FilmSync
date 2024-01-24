import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { UseUserInfo } from "../features/login/useUserInfo";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  // const { isLoading, isaAthenticated, user } = UseUser();
  const navigate = useNavigate();
  const { isLoading, user } = UseUserInfo();

  useEffect(() => {
    if (user === null && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);
  if (isLoading) return <Spinner />;

  if (user !== null) return children;
}

export default ProtectedRoute;
