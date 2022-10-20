import { useContext } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../App";

const PrivateRoutes = ({ loggedInUser }) => {
   const navigate= useNavigate()
  console.log(loggedInUser);
  let auth = { token: false };
  return loggedInUser.name ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
