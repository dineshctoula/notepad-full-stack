import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}) {
  const token = localStorage.getItem("token");
//   if user logged in token exists so user can move to next page otherise it is protected 

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}