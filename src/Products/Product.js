import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";

function Product({ products, addToCart }) {

  const [likedProduct, setLikedProduct] = useState([]);
  useEffect(() => {
    localStorage.setItem("LikedProducts", JSON.stringify(likedProduct));
  }, [likedProduct]);

  
  const handleLikedProduct = (like,ID, title) => {
    const newLike = {
      productId:ID,
      productTitle: title,
      like: like,
    };
    setLikedProduct([...likedProduct, newLike]);
    
  };
  
  return (
    <div className="container gap-4 p-6 flex mx-auto flex-wrap justify-center">
      {products &&
        products.map((product, key) => {
          const { ID, title, description, category, image, price } = product;
          return (
            <div
              key={ID}
              className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              data-aos="fade-up"
            >
              <Link
                to={"/product/" + ID}
                state={{ title, price, description, image, category }}
              >
                <img
                  className="p-8 rounded-t-lg"
                  src={image}
                  alt="product image"
                />
              </Link>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
                    {title}
                  </h5>
                </a>

                <div className="flex  justify-between items-end">
                  <span className="text-3xl pr-2 font-bold  text-gray-900 dark:text-white">
                    {price}৳
                  </span>
                  <button
                    className="text-2xl"
                    onClick={() => handleLikedProduct(true,ID, title)}
                  >
                    {" "}
                    <FcLike />
                  </button>

                  <button
                    onClick={() => addToCart(product)}
                    className=" bg-red-500 rounded-full hover:bg-red-600 px-4 py-1 text-sm text-white uppercase"
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
