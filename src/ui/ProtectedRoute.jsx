import { useNavigate } from "react-router-dom";
import { UseUser } from "../features/Auth/useUser";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(---color--grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isaAthenticated } = UseUser();
  console.log(isLoading, isaAthenticated);

  useEffect(() => {
    if (!isLoading && !isaAthenticated) navigate("/login");
  }, [isaAthenticated, isLoading, navigate]);
  if (isLoading) return <h1>is loding</h1>;

  return children;
}

export default ProtectedRoute;