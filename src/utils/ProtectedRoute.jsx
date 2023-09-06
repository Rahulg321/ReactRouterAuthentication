import { Navigate } from "react-router-dom";
import { getAuthToken } from "./auth";

export default function ProtectedRoute({ children }) {
  const token = getAuthToken();

  if (!token) {
    return <Navigate to="/authentication" />;
  } else {
    return children;
  }
}
