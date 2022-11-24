import { useContext } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import { userContext } from "../App";
import { GetCurrentUser } from "../Auth/GetCurrentUser";

const PrivateRoutes = ({ loggedInUser, children }) => {
  // const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const location = useLocation();
  const user = GetCurrentUser();
  console.log(user || loggedInUser.name);
  return !loggedInUser.email ? children : children;
};
// <Navigate to="/login" />
export default PrivateRoutes;
