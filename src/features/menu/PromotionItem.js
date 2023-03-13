import React from "react";
import { motion } from "framer-motion";
import { AiFillPlusCircle } from "react-icons/ai";

function PromotionItem(props) {
  // console.log(products);
  return (
    <div className=" mb-0  ">
      <motion.div whileTap={{ scale: 0.75 }}>
        <div className="grid grid-cols-2  gap-6  ">
          <div>
            <p className="font-bold ml-0 mt-2 pl-0 text-sm   text-gray-50 ">
              {props.product.description}
            </p>

            <p className="font-bold ml-0 mt-2 pl-0 text-sm   text-gray-50 ">
              Today Best Offer 50% OFF!!!!!
            </p>
          </div>

          <div className="relative ">
            <img
              src={props.product.productImage}
              className=" object-cover mb-1 h-30 w-32 "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PromotionItem;
