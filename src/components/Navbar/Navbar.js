import React, { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { cartContext, userContext } from "../../App";

import { auth } from "../../Auth/firebaseConfig";
import { GetCurrentUser } from "../../Auth/GetCurrentUser";

function Navbar() {
  const user = GetCurrentUser();
  const { cartNumber } = useContext(cartContext);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const navigate = useNavigate();

  console.log(user);
  useEffect(() => {}, [user]);
   
  const handleLogOut = () => {
    auth
      .signOut(auth)
      .then(() => {
        navigate("/");
        loggedInUser.name = "";
        
        
       
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav class="flex items-center justify-between flex-wrap bg-white p-6 sticky top-0 shadow-md">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          to="/"
          class="text-xl tracking-wider text-rose-800 font-semibold font "
        >
          Tech Mart
        </Link>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="justify-end w-full block flex-grow lg:flex lg:items-center  lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link
            to="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-rose-700 mr-4"
          >
            About
          </Link>

          <Link
            to="/contact"
            class="block mt-4 mr-3 lg:inline-block lg:mt-0 text-black hover:text-rose-700"
          >
            Contact
          </Link>
          <Link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-rose-700"
          >
            Products
          </Link>
        </div>
        {!user && !loggedInUser.name && (
          <>
            <div className="cart-menu-btn">
              <Link to="/cart" role="button" className="relative flex">
                <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartNumber}
                </span>
              </Link>
            </div>
            <div>
              <Link
                to="/login"
                className="ml-3 inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-rose-700 border-black hover:bg-rose-600 hover:text-white mt-4 lg:mt-0"
              >
                LOGIN
              </Link>
            </div>
            <div>
              <Link
                to="/signup"
                className="ml-3 inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-rose-700 border-black hover:bg-rose-600 hover:text-white mt-4 lg:mt-0"
              >
                SIGN UP
              </Link>
            </div>
          </>
        )}

        {(user || loggedInUser.name) && (
          <>
            <div>
              <Link className="navlink mr-3 text-black" to="/">
                {user || loggedInUser.name}
              </Link>
            </div>
            <div className="cart-menu-btn">
              <Link to="/cart" role="button" className="relative flex">
                <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                  {cartNumber}
                </span>
              </Link>
            </div>
            <Link
              className="ml-3 inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-rose-700 border-black hover:bg-rose-600 hover:text-white mt-4 lg:mt-0"
              onClick={handleLogOut}
            >
              LOGOUT
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
