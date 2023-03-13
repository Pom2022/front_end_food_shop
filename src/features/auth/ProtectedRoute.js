import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { authenticatedUser } = useAuth();
  console.log(authenticatedUser);
  if (!authenticatedUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
