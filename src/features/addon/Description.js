import React from "react";
import useCart from "../../hooks/use.Cart";

function Description() {
  const { sendTopOnPage } = useCart();
  return (
    <div>
      <div>
        <p
          className=" z-40
          absolute left-9
          top-28
        text-gray-500 text-normal
        font-semibold"
        >
          {sendTopOnPage.description}
        </p>
      </div>
    </div>
  );
}

export default Description;
