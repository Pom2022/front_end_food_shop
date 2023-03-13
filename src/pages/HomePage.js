import React from "react";
import burgerImage from "../assets/images/burger2.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div
      className="z-0  h-154 max-h-fit flex flex-col 
    bg-gradient-to-br 
  from-indigo-500 to-indigo-700"
    >
      <div className="z-20 absolute top-24 left-20">
        <img src={burgerImage} alt="Burger" className="w-52 h-56" />
        <div className="ml-9">
          <div className="text-gray-50 text-3xl font-bold mt-5 ml-7">Enjoy</div>
          <div className="text-gray-50 text-3xl font-bold mt-2">Your Food</div>
        </div>
        <div className="mt-20">
          <nav>
            <Link to="/menu">
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className=" absolute left-4 w-11/12 p-2 rounded-full
                 bg-gray-50 text-gray-600 text-lg my-2 font-bold
          hover:shadow-lg transition-all duration-150 ease-out"
              >
                Get Start
              </motion.button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
