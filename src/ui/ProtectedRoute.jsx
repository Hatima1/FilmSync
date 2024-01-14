import { Navigate, useNavigate } from "react-router-dom";
import { UseUser } from "../features/Auth/useUser";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { useEffect } from "react";
import { UseUserInfo } from "../features/login/useUserInfo";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(---color--grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // const { isLoading, isaAthenticated, user } = UseUser();
  const navigate = useNavigate();
  const { isLoading, user } = UseUserInfo();
  console.log(user === null);

  useEffect(() => {
    if (user === null && !isLoading) navigate("/login");
  }, [user, isLoading, navigate]);
  if (isLoading) return <h1>is loding</h1>;
  // if (user !== null) navigate("/timeline");

  if (user !== null) return children;
}

export default ProtectedRoute;
