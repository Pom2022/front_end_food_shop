import React from "react";
import useCart from "../../hooks/use.Cart";
import { motion } from "framer-motion";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductsItems(props) {
  const { addToCartHandler, addToTopAddonPage } = useCart();

  return (
    <div
      className=" flex flex-row  "
      onClick={() => addToCartHandler(props.product)}
    >
      <motion.div whileTap={{ scale: 0.75 }}>
        <div className="flex flex-col-reverse justify-center justify-items-center ml-2 ">
          <div>
            <p className="font-normal ml-2">{props.product.name}</p>
          </div>

          <nav>
            <Link to="/addon-page">
              <div
                className="relative bg-slate-200 
              bg-cover bg-center"
                onClick={() => addToTopAddonPage(props.product)}
              >
                <AiFillPlusCircle
                  className="text-green-900 text-xl 
            absolute top-0 right-0"
                />
                <img
                  src={props.product.productImage}
                  className="object-contain md:object-scale-down "
                />
              </div>
            </Link>
          </nav>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductsItems;
