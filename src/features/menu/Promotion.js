import React from "react";
import PromotionItem from "./PromotionItem";

function Promotion({ products }) {
  console.log(products);
  return (
    <div className="bg-indigo-500 mx-4 pb-0 pt-0 px-4 rounded-lg flex justify-end">
      {products.map((el, index) => {
        if (index < 2 || index > 2) {
          return null;
        }

        return <PromotionItem key={el.id} product={el} />;
      })}
    </div>
  );
}

export default Promotion;
