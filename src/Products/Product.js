import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Product({ products, addToCart }) {
  return (
    
    <div className="container grid grid-cols-4  gap-4 p-6">
      
       
      {products &&
        products.map((product, key) => {
          const { ID, title, description, category, image, price } = product;
          return (
            <div
              key={ID}
              className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <Link
              
                to={"/product/" + ID}
                state={{ title, price, description, image, category }}
              >
                <img
                  className="p-8 rounded-t-lg hover:-translate-y-1 hover:scale-110 h-30"
                  src={image}
                  alt="product image"
                />
              </Link>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>

                <div className="flex  justify-between items-end">
                  <span className="text-3xl pr-2 font-bold  text-gray-900 dark:text-white">
                    {price}৳
                  </span>

                  <button
                    onClick={() => addToCart(product)}
                    className=" bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Product;
