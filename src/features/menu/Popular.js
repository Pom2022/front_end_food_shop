import React from "react";
import PopularItem from "./PopularItem";

function Popular({ products }) {
  return (
    <div className="bg-gray-50 pb-0 pt-0 px-4 flex justify-between">
      {products.map((el, index) => {
        if (index > 1) {
          return null;
        }

        return <PopularItem key={el.id} product={el} />;
      })}
    </div>
  );
}

export default Popular;
