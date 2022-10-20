import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../Auth/GetCurrentUser";

const PrivateRoutes = ({ loggedInUser, children }) => {
   const user= GetCurrentUser();
//   const navigate = useNavigate();
//   console.log(user);
// //   let auth = { token: false };
  const auth =  user || loggedInUser;
 return auth ? children :  <Navigate to="/login" /> ;
};

export default PrivateRoutes;
