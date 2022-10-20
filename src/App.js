import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import SingleProduct from "./Products/SingleProduct";
import PrivateRoutes from "./Routes/PrivateRoutes";
export const cartContext = createContext();
export const userContext = createContext();
function App() {
  const [selectedCart, setSelelctedCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cartNumber, setCartNumber] = useState();
  const getSelectedCart = (cart) => {
    setSelelctedCart(cart);
  };
  console.log(loggedInUser);
  console.log(cartNumber);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <cartContext.Provider
        value={{ selectedCart, getSelectedCart, setCartNumber, cartNumber }}
      >
        <BrowserRouter>
          <Navbar cartNumber={cartNumber} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route element={<PrivateRoutes loggedInUser={loggedInUser} />}> */}
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
            {/* </Route> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </userContext.Provider>
  );
}

export default App;
