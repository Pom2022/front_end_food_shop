import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AdminProtectedRoute({ children }) {
  const { authenticatedUser } = useAuth();
  // console.log(authenticatedUser.role);
  if (authenticatedUser.role === "customer") {
    return <Navigate to={"/login"} />;
  }
  return children;
}
