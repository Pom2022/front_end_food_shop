import React from "react";
import AddOnProductItems from "./AddOnProductItems";

function AddOnProduct({ products }) {
  return (
    <div div className="py-2 px-4 flex justify-between   ">
      {products.map((el, index) => {
        if (index < 4 || index > 7) {
          return null;
        }

        return <AddOnProductItems key={el.id} product={el} />;
      })}
    </div>
  );
}

export default AddOnProduct;
