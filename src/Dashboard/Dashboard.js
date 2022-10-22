import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  const [cartItems, setCartItems] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("items");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [likedItems, setLikedItems] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("LikedProducts");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  return (

    <div className="grid grid-cols-3 gap-6 mt-6 xl:grid-cols-1">
      <div className="card">
        <div className="card-header justify-center w-30 bg-slate-400 rounded-md p-3">
          WishList
        </div>

        <div className="p-6  justify-between items-center text-gray-800 border-b">
          {likedItems &&
            likedItems.map((data) => {
              return (
                <>
                  <div className="items-center" key={data.id}>
            
                   <Link to={"/"}> <strong>{data.productTitle}</strong></Link>
                  </div>
                  <div>
                  
                  </div>
                </>
              );
            })}
        </div>
      </div>

      <div className="md:flex flex-wrap card col-span-2 xl:col-span-1">
        <div className="card-header mx-auto justify-center bg-slate-400 rounded-md p-3">
          Recent Buying Product
        </div>

        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-r"></th>
              <th className="px-4 py-2 border-r">product</th>
              <th className="px-4 py-2 border-r">price</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {cartItems &&
              cartItems.map((data) => {
                return (
                  <>
                    <tr key={data.ID}>
                      <td className="border border-l-0 px-4 py-2 text-center text-green-500">
                        <i className="fad fa-circle"></i>
                      </td>
                      <td className="border border-l-0 px-4 py-2">
                        {data.title}
                      </td>
                      <td className="border border-l-0 px-4 py-2">
                        ${data.price}
                        <span className="num-2"></span>
                      </td>
                      <td className="border border-l-0 border-r-0 px-4 py-2">
                        <span className="num-2"></span> pending
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
