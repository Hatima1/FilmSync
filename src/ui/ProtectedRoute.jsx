import { useNavigate } from "react-router-dom";

import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { useEffect } from "react";
import { UseUserInfo } from "../features/login/useUserInfo";

function ProtectedRoute({ children }) {
  // const { isLoading, isaAthenticated, user } = UseUser();
  const navigate = useNavigate();
  const { isLoading, user } = UseUserInfo();

  useEffect(() => {
    if (user === null && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);
  if (isLoading) return <h1>is loding</h1>;

  if (user !== null) return children;
}

export default ProtectedRoute;
