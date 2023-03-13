import React from "react";

import { motion } from "framer-motion";
import { AiFillPlusCircle } from "react-icons/ai";
import useCart from "../../hooks/use.Cart";

function PopularItem(props) {
  const { addToCartHandler, addToTopAddonPage } = useCart();

  return (
    <div
      className=" flex flex-row  mb-0  "
      onClick={() => addToCartHandler(props.product)}
    >
      <motion.div whileTap={{ scale: 0.75 }}>
        <div className="flex flex-col-reverse mt-1    ">
          <div className="flex self-start">
            <p className="font-bold ml-6 text-sm  mt-1 text-yellow-600 ">
              ฿ {props.product.price}
            </p>
          </div>

          <div>
            <p className="font-normal ml-6 pb-0 mb-0">{props.product.name}</p>
          </div>
          <div
            className="relative bg-slate-200 bg-cover bg-center p-0"
            onClick={() => addToTopAddonPage(props.product)}
          >
            <AiFillPlusCircle
              className="text-green-900 text-xl 
            absolute bottom-0 right-0"
            />
            <img
              src={props.product.productImage}
              className=" object-cover mt-2 h-28 w-40 "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PopularItem;
