import React, { useEffect } from "react";
import AOS from "aos";
import {
  HashLink,
  NavHashLink,
  HashLink as Link,
} from "react-router-hash-link";


const Banner = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen">

      <img
        src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="absolute h-full w-full object-cover"
        alt=""
      />

      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <header class="absolute top-0 left-0 right-0 z-20"></header>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div
          class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10"
          data-aos="fade-right"
        >
          <span class="font-bold uppercase text-yellow-400">Your Shop</span>
          <h1 class="font-bold text-6xl sm:text-7xl text-black leading-tight mt-4">
            Let yourself be carried
            <br />
            by nature
          </h1>
          <Link
            to="/#search"
            class="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
