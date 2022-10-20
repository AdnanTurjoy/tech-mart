import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SingleProduct(props) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
   
      <div className="md:flex justify-center dark:bg-gray-800 dark:border-gray-700">
        <img
          className="p-8 rounded-t-lg hover:-translate-y-1 hover:scale-110"
          src={location.state.image}
          alt="product image"
        />
        <div className="flex pt-6">
          <div className="px-5 pb-5">
           
            <br></br>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {location.state.title}
            </h5>
            <h1 className="font-bold">Description: </h1>
            <p>{location.state.description}</p>
            <div className="my-4">
        
            <p className="">Category: #{location.state.category}</p>
            </div>
            <span className="text-3xl pr-2 font-bold  text-gray-900 dark:text-white">
              {location.state.price}৳
            </span>
            <div className="flex  justify-between items-end">
              <Link
                to="/"
                className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default SingleProduct;
