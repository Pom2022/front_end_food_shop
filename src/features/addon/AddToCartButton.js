import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AddToCartButton() {
  return (
    <div>
      <nav>
        <Link to="/cart-page">
          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className=" absolute left-4 w-11/12 p-2 rounded-full bg-gradient-to-tr  from-indigo-500 to-indigo-700 text-gray-50 text-lg my-2
          hover:shadow-lg transition-all duration-150 ease-out"
          >
            Add To Cart
          </motion.button>
        </Link>
      </nav>
    </div>
  );
}

export default AddToCartButton;
