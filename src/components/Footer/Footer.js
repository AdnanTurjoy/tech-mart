import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { useSelector } from "react-redux";
function Footer(props) {
  const { totalQuantity } = useSelector((state) => state.cart);
  useEffect(() => {
    if (totalQuantity) {
      toast("Add to cart!", {
        icon: "🛒",
      });
    }
  }, [totalQuantity]);
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900 mt-3">
      <Link
        to="/"
        class=" text-2xl tracking-wider text-black-800 font-semibold font "
      >
        Tech Mart
      </Link>
      <Toaster loading="" position="bottom-right" reverseOrder={false} />
      <div className="md:flex md:justify-center">
        <div className="mb-6 md:mb-0"></div>
        <div className="md:flex  justify-center">
          <div className="mr-10">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Technologies
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  React
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Firebase
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="https://www.facebook.com/adnan.turjoy.9"
                  class="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AdnanTurjoy"
                  class="hover:underline"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#" className="hover:underline">
            Adnan.Turjoy
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
