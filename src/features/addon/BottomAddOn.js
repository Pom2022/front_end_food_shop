import { React, useEffect, useState } from "react";
import * as createProductApi from "../../apis/createProduct-api";
import Footer from "../../layout/Footer";
import AddOnProduct from "./AddOnProduct";
import AddOnTitle from "./AddOnTitle";
import AddToCartButton from "./AddToCartButton";

import Description from "./Description";
import Rating from "./Rating";
import TitleName from "./TitleName";

function BottomAddOn() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await createProductApi.getAllFoodProduct();
      setProducts(res.data.foodProducts);
    };
    fetchPost();
  }, []);

  return (
    <div
      className=" relative z-10 bottom-10  flex flex-col
     
     
      gap-x-1.5
      rounded-tl-6xl bg-gray-50"
    >
      <div className=" z-20 pt-12 pb-8  ">
        <Rating />
      </div>
      <div className=" z-20   pb-10  bg-gray-50">
        <TitleName />
      </div>
      <div className=" z-20  py-8  bg-gray-50">
        <Description />
      </div>
      <div className=" z-20  pb-10  bg-gray-50">
        <AddOnTitle />
      </div>
      <div className=" z-20  pt-0 pb-0  bg-gray-50">
        <AddOnProduct products={products} />
      </div>
      <div className=" z-20 ">
        <AddToCartButton />
      </div>
    </div>
  );
}

export default BottomAddOn;
