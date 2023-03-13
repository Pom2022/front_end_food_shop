import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

import burgerImage from "../../assets/images/burger2.png";
import useCart from "../../hooks/use.Cart";

function TopAddOn() {
  const { state, sendTopOnPage } = useCart();
  const initial = 0;
  const totalQuantity = state.reduce(
    (accumulator, current) => accumulator + current.quantity,
    initial
  );

  // let lastProduct = state[state.length - 1];
  // let lastProduct = state[0];

  // console.log(lastProduct);

  return (
    <div className="static py-52 z-10">
      <div className="z-20 absolute top-2 left-2">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className="text-white text-3xl" />
        </motion.div>
      </div>
      <div className="z-20 absolute top-24 left-20">
        <img
          src={sendTopOnPage.productImage || burgerImage}
          alt="Burger"
          className="w-52 h-56"
        />
      </div>

      <div className="z-20 absolute top-2 right-2">
        <nav>
          <Link to="/cart-page">
            <MdOutlineShoppingCart
              className="text-gray-50
             text-2xl mt-3 mx-3 cursor-pointer"
            />

            <div
              className="absolute -bottom-1 
            -left-0 mx-4 my-4  w-5 h-5 rounded-full bg-cartNumBg"
            ></div>
            <p
              className=" absolute -bottom-1 
            -left+3 mx-3 my-4 pl-4 text-xs text-black font-semibold"
            >
              {totalQuantity}
            </p>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default TopAddOn;
