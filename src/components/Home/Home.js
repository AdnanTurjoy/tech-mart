import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";
import { auth, fs } from "../../Auth/firebaseConfig";
import { GetCurrentUser } from "../../Auth/GetCurrentUser";
import Product from "../../Products/Product";
import Products from "../../Products/Products";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import Search from "../Search/Search";
import Banner from "./Banner";

function Home(props) {
  const { setCartNumber } = useContext(cartContext);

  const getTotalCartAddedNumber = (number) => {
    setCartNumber(number);
  };
  // getting current user function

  const user = GetCurrentUser();
  return (
    <>
      <Banner />
      <div>
        <h1 className="font-bold text-gray-800 text-4xl text-center uppercase p-3">
          Products
        </h1>
      </div>

      <Products getTotalCartAddedNumber={getTotalCartAddedNumber} />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
