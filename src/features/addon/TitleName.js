import React from "react";
import useCart from "../../hooks/use.Cart";

function TitleName() {
  const { sendTopOnPage } = useCart();
  return (
    <div>
      <div>
        <p
          className=" z-30
          absolute left-9
          top-22.5
        text-gray-600 text-xl
        font-semibold"
        >
          {sendTopOnPage.name}
        </p>
      </div>
    </div>
  );
}

export default TitleName;
