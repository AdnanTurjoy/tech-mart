import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";
import toast, { Toaster } from "react-hot-toast";

import { GetCurrentUser } from "../../Auth/GetCurrentUser";

function Cart(props) {
  const { selectedCart } = useContext(cartContext);
  const [updateCart, setUpdateCart] = useState([]);
  const [shippingCostAdd, setShippingCostAdd] = useState(0);
  useEffect(() => {
    setUpdateCart(selectedCart);
  }, [selectedCart]);

  const deleteCart = (id) => {
    console.log(id);
    setUpdateCart(updateCart.filter((data) => data.ID !== id));
  };
  const totalPrice = updateCart.reduce(
    (total, product) => total + parseInt(product.price),
    0
  );
  const handleApply = () => {
    toast.success("Successfully Apply to Shipping!");
    setShippingCostAdd(totalPrice + 100);
  };
  const user = GetCurrentUser();
  return (
    <>
    
      <div className="container mx-auto mt-10">
        <div>
          <h1 className="font-bold  text-4xl text-center uppercase p-3">
            Cart
          </h1>
        </div>

        <div>
          <Toaster loading="" position="top-right" reverseOrder={false} />
        </div>
        <div className="flex shadow-md my-10">
          <div className="w-1/2 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {updateCart.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>

              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
            </div>
            {updateCart &&
              updateCart.map((product, key) => {
                const { ID, title, description, category, image, price } =
                  product;
                //   console.log(image);
                return (
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img className="h-24" src={image} alt="" />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{title}</span>
                      </div>
                    </div>

                    <span className="text-center w-1/5 font-semibold text-sm">
                      {price}
                    </span>
                    <button
                      onClick={() => deleteCart(ID)}
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            <Link
              to="/"
              class="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Total Items: {updateCart.length}
              </span>
              <span className="font-semibold text-sm">{totalPrice}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - 100 tk</option>
              </select>
            </div>

            <button
              onClick={handleApply}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
            >
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>{shippingCostAdd}</span>
              </div>
              <Link
                to="/"
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
