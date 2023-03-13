import React from "react";
import { AiFillStar } from "react-icons/ai";
import useCart from "../../hooks/use.Cart";

function Rating() {
  const { sendTopOnPage } = useCart();
  return (
    <div>
      <div
        className="z-30 
        absolute left-9
        top-6
        
        py-4 px-10 ml-0
      rounded-full  bg-indigo-500"
      >
        <AiFillStar
          className="absolute
        left-3.5 top-3.5
        text-yellow-300 text-xl"
        />

        <p
          className="absolute
        left-18 top-2.5
        text-gray-50 text-xl
        font-semibold"
        >
          4.8
        </p>
      </div>

      <div>
        {" "}
        <p
          className="absolute
        right-10 top-9
        text-yellow-400 text-xl
        font-bold"
        >
          {sendTopOnPage.price} Baht
        </p>
      </div>
    </div>
  );
}

export default Rating;
