import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
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
            {/* <Route element={<PrivateRoutes  />}> */}
            <Route path="/product/:id" element={<SingleProduct />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/dashboard/:name" element={<Dashboard />} />
            {/* </Route> */}
            <Route
              path="/cart"
              element={
                <PrivateRoutes loggedInUser={loggedInUser}>
                  <Cart />
                </PrivateRoutes>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </userContext.Provider>
  );
}

export default App;
