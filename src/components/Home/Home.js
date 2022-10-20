import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";
import { auth, fs } from "../../Auth/firebaseConfig";
import { GetCurrentUser } from "../../Auth/GetCurrentUser";
import Product from "../../Products/Product";
import Products from "../../Products/Products";
import Search from "../Search/Search";

function Home(props) {
  const { setCartNumber } = useContext(cartContext);

  const getTotalCartAddedNumber = (number) => {
    setCartNumber(number);
  };
  // getting current user function

  const user = GetCurrentUser();
  return (
    <>
      <div>
        <h1 className="font-bold  text-4xl text-center uppercase p-3">
          Products
        </h1>
      </div>
     
      <Products getTotalCartAddedNumber={getTotalCartAddedNumber} />
    </>
  );
}

export default Home;
