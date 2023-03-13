import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getAccessToken } from "../../utils/local-storage";
import jwt_decode from "jwt-decode";

export default function CustomerProtectedRoute({ children }) {
  const user = getAccessToken();
  const decoded = jwt_decode(user);
  console.log(decoded, "decoded");
  // const { authenticatedUser } = useAuth();
  // console.log(authenticatedUser.role);
  if (decoded.role === "admin") {
    return <Navigate to={"/admin"} />;
  }
  return children;
}

// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// export default function CustomerProtectedRoute({ children }) {
//   const { authenticatedUser } = useAuth();
//   const location = useLocation();

//   if (authenticatedUser.role === "admin" && location.pathname !== "/login") {
//     return <Navigate to={"/login"} />;
//   }

//   return children;
// }
