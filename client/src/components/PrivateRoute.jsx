import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  let currectUser = useSelector((state) => state.user);

  return currectUser ? <Outlet /> : <Navigate to={"/signin"} />;
}
