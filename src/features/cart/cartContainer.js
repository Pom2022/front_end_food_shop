import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import useCart from "../../hooks/use.Cart";
import * as createOrderApi from "../../apis/order-api";

function CartContainer() {
  const { addToCartHandler, decrementQuantity, state } = useCart();
  const initial = 0;
  const total = state.reduce(
    (accumulator, current) =>
      accumulator + current.price * current.quantity + 30,
    initial
  );
  const [input, setInput] = useState();

  useEffect(() => {
    setInput({
      // id: null,
      totalPrice: total,
      state: state,
    });
  }, [state, total]);

  const initialValue = 0;
  const subTotal = state.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );

  const handleOnclick = async (input) => {
    await createOrderApi.createOrder(input);
  };
  console.log(input);

  return (
    <div
      className="w-full md:w-375 h-screen bg-white drop-shadow-md flex
    flex-col"
    >
      <div className="w-full flex  items-center justify-between p-4 cursor-pointer">
        <nav>
          <Link to="/menu">
            <motion.div whileTap={{ scale: 0.75 }}>
              <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
            </motion.div>
          </Link>
        </nav>

        <p className="text-textColor text-lg font-semibold mr-40">Cart</p>
      </div>
      {/* bottom section */}
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        <div
          className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
      scrollbar-none"
        >
          {/* cart Item */}
          {state.map((item) => (
            <div
              key={item.id}
              className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
            >
              <img
                src={item.productImage}
                className="w-24 h-24 max-w-[60px] rounded-full object-contain"
                alt=""
              />
              {/* name section */}
              <div className="flex flex-col gap-0">
                <p className="text-base text-gray-50">{item.name}</p>
                <p className="text-sm block text-gray-300 font-semibold">
                  {" "}
                  ฿{item.price}
                </p>
              </div>
              {/* button section */}
              <div className="group flex items-center gap-2 ml-auto cursor-pointer"></div>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus
                  className="text-gray-50"
                  onClick={() => decrementQuantity(item)}
                />
              </motion.div>
              <div className=" pt-2 pl-2 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                <p className="w-5 h-5">{item.quantity}</p>
              </div>

              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus
                  className="text-gray-50"
                  onClick={() => addToCartHandler(item, "ADD_TO_CART")}
                />
              </motion.div>
            </div>
          ))}
        </div>
        {/* cart total section */}

        <div
          className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center
        justify-evenly px-8 py-2"
        >
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 tex-lg"> Sub Total</p>
            <p className="text-gray-400 tex-lg"> ฿{subTotal}</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 tex-lg"> Delivery</p>
            <p className="text-gray-400 tex-lg"> ฿30</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 text-xl font-semibold">Total</p>
            <p className="text-gray-200 text-xl font-semibold">฿{total}</p>
          </div>
          {/* <nav>
            <Link to="/order-summary"> */}

          <a href="/order-summary">
            <div
              className="flex flex-row justify-center"
              onClick={() => handleOnclick(input)}
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-80 p-2 rounded-full bg-gradient-to-tr  from-indigo-500 to-indigo-700 text-gray-50 text-lg my-2
          hover:shadow-lg transition-all duration-150 ease-out"
              >
                Check Out
              </motion.button>
            </div>
          </a>
          {/* </Link>
          </nav> */}
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
