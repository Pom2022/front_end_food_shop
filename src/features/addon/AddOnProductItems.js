import { React } from "react";
import useCart from "../../hooks/use.Cart";
import { motion } from "framer-motion";
import { AiFillPlusCircle } from "react-icons/ai";

function AddOnProductItems(props) {
  const { addToCartHandler } = useCart();

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
          <div
            className="relative bg-slate-200 
          bg-cover bg-center"
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
        </div>
      </motion.div>
    </div>
  );
}

export default AddOnProductItems;
