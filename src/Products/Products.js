import React, { useContext, useEffect, useState } from "react";
import { auth, fs } from "../Auth/firebaseConfig";
import Product from "./Product";
import ReactLoading from "react-loading";
import { useNavigate,Link } from "react-router-dom";
import { cartContext } from "../App";
import Search from "../components/Search/Search";

function Products({ getTotalCartAddedNumber }) {
  const navigate = useNavigate();
  const { getSelectedCart } = useContext(cartContext);

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [SearchedProduct,setSearchedProduct] = useState([]);
  const [cart, setCart] = useState([]);


  // getting products function
  const getProducts = async () => {
    const products = await fs.collection("products").get();
    const productsArray = [];
    if (products.docs.length >= 1) {
      for (var snap of products.docs) {
        var data = snap.data();
        data.ID = snap.id;
        productsArray.push({
          ...data,
        });
        if (productsArray.length === products.docs.length) {
          setLoading(false);
          setProducts(productsArray);
          setSearchedProduct(productsArray);
        }
      }
    } else {
      setProducts([]);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  const handleSearch = (searchText) => {
    let value = searchText.toLowerCase();
    const SearchedProductText = products.filter((product) => {
      const productValue = product.title.toLowerCase();
      return productValue.includes(value);
    });
    setSearchedProduct(SearchedProductText);
  };
  useEffect(() => {
    getTotalCartAddedNumber(cart.length);
    getSelectedCart(cart);
  }, [cart]);
  // let Product;
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const category= [...new Set( products.map(obj => obj.category)) ];
  const handleCategory=(data)=>{
    setSearchedProduct( products.filter((product)=>product.category===data))
    
  }
  return (
    <>
      <Search handleSearch={handleSearch} />
      
      <div className="md:flex mx-auto flex-wrap justify-center">
      
    <p className="bg-slate-400 rounded-md">All Categories: </p>
      {category && 
     
       category.map((data)=>{
        return <button key={data.ID} onClick={()=>handleCategory(data)} className="px-3  hover:bg-slate-700 hover:underline hover:text-white hover:rounded-md"># {data}</button> 
       })

      }
      </div>
      
      <div className="m-auto content-center">
        {loading && (
          <ReactLoading
            className="m-auto content-center"
            type="bubbles"
            color="#122c40"
            height={75}
            width={100}
          />
        )}

        <Product products={SearchedProduct} addToCart={addToCart} />
      </div>
    </>
  );
}

export default Products;
